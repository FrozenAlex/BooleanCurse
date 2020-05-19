import { Component, h, JSX } from "preact";
import { checkCompleteness } from "../../lib/Analysis";
import Equation from "../components/Equation";
import OpKeyboard from "../components/OpKeyboard";
import { parseFunction } from "../../lib/Parser";
import ResultCard from "../components/ResultCard";

export default class Home extends Component<
	{},
	{
		equations: Array<string>;
		input: string;
		output: string;
		results: Array<{
			source: string;
			cortege: any;
			properties: {
				keepsZero: boolean;
				keepsOne: boolean;
				s: boolean;
				mono: boolean;
				linear: boolean;
			};
		}>;
	}
> {
	constructor(props) {
		super(props);
		this.state = {
			equations: ["and", "->"],
			input: "",
			output: "",
			results: [],
		};
	}

	componentDidMount() {
		this.calculate();
	}

	calculate() {
		try {
			// Избавиться от пустых выражений
			let equations = this.state.equations.filter(
				(element) => element != "" && element != " "
			);
			let parsedEquations = equations.map((equation) => parseFunction(equation));
			let result = checkCompleteness(parsedEquations);

			let results = result.results.map((element, index) => {
				return {
					source: equations[index],
					cortege: parsedEquations[index],
					properties: element,
				};
			});

			this.setState({
				output: `Система функций ${result.isFull ? "полна" : "не полна"}`,
				results: results,
			});
		} catch (err) {
			console.error(err);
			this.setState({
				output: err.message,
			});
			return [];
		}
	}

	fastAdd(equation: string) {
		if (this.state.equations.length == 1 && this.state.equations[0] == "") {
			this.setState(
				{
					equations: [equation],
				},
				this.calculate
			);
		} else if (this.state.equations[this.state.equations.length - 1] == "") {
			let equations = [...this.state.equations];
			equations[this.state.equations.length - 1] = equation;
			this.setState(
				{
					equations: equations,
				},
				this.calculate
			);
		} else {
			this.setState(
				{
					equations: [...this.state.equations, equation],
				},
				this.calculate
			);
		}
	}

	// Adds new equation and recal
	add() {
		return new Promise((resolve, reject) => {
			this.setState(
				{
					equations: [...this.state.equations, ""],
				},
				() => {
					this.calculate();
					resolve();
				}
			);
		});
	}

	// Adds new equation
	del(index: number) {
		let equations = [...this.state.equations];
		equations.splice(index, 1);
		this.setState(
			{
				equations: equations,
			},
			async () => {
				// Если не осталось то добавим новую
				if (this.state.equations.length == 0) {
					await this.add();
				} else {
					this.calculate();
				}
			}
		);
	}

	onChangeHandler(key, value) {
		let equations = [...this.state.equations];
		equations[key] = value;
		this.setState({ equations: equations }, this.calculate);
	}

	render() {
		return (
			<div>
				<h3 className="text-center">Быстрый Ввод</h3>
				<OpKeyboard onAdd={this.fastAdd.bind(this)} />

				<div className="flex">
					<button
						class="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
						onClick={this.add.bind(this)}
					>
						Добавить формулу
					</button>

					{/* <button
						class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
						onClick={this.calculate.bind(this)}
					>
						Вычислить
					</button> */}
				</div>

				<h3>
					Ввод формулы (в виде кортежа значений (1111), пустые строки игнорируются):
				</h3>
				<div>
					{this.state.equations.map((element, index) => (
						<Equation
							key={index}
							id={index}
							value={element}
							onChange={this.onChangeHandler.bind(this)}
							onDelete={this.del.bind(this, [index])}
						/>
					))}
				</div>

				<div id="output" className="text-center my-3">
					{this.state.output}
				</div>

				<div>
					{this.state.results.map((element) => (
						<ResultCard result={element}></ResultCard>
					))}
				</div>
			</div>
		);
	}
}
