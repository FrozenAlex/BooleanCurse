import { Component, h, JSX } from "preact";
import { analyzeFunctionString, FunctionProperties, checkCompleteness } from "../../lib/Analysis";
import Equation from "../components/Equation";

export default class Home extends Component<
	{},
	{
		equations: Array<string>;
		input: string;
		output: string;
	}
> {
	constructor(props) {
		super(props);
		this.state = {
			equations: ["1111","",""],
			input: "",
			output: "",
		};
	}

	calculate() {
		try {
			let result = checkCompleteness(this.state.equations);
			this.setState({
				output: `Система функций ${(result)?"полна":"не полна"}`,
			});
		} catch (err) {
			this.setState({
				output: err.message,
			});
		}
	}

	// Adds new equation
	add() {
		this.setState({
			equations: [...this.state.equations, ""],
		});
	}

	// Adds new equation
	del(index: number) {
		
		let equations = [...this.state.equations]
		equations.splice(index, 1);
		this.setState({
			equations: equations
		}, ()=>{
			// Если не осталось то добавим новую
			if (this.state.equations.length == 0) this.add(); 
		});
	}

	onChangeHandler(key, value) {
		let equations = [...this.state.equations];
		equations[key] = value;
		this.setState({ equations: equations }, this.calculate);
	}

	render() {
		return (
			<div>
				<h3>Ввод формулы (в виде кортежа значений (1111), пустые строки игнорируются):</h3>
				<div>
					{this.state.equations.map((element, index) => (
						<Equation
							key={index}
							id={index}
							value={element}
							onChange={this.onChangeHandler.bind(this)}
							onDelete={this.del.bind(this)}
						/>
					))}
				</div>
				
				<div className="flex">
				<button
					class="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={this.add.bind(this)}
				>
					Добавить формулу
				</button>

				<button
					class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={this.calculate.bind(this)}
				>
					Вычислить
				</button>
				</div>
				
				<div id="output" className="text-center my-3">{this.state.output}</div>
			</div>
		);
	}
}
