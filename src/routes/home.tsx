import { Component, h, JSX } from "preact";
import { analyzeFunctionString } from "../../lib/Analysis";

export default class Home extends Component<
	{},
	{
		operations: Array<Object>;
		input: string;
		output: string;
	}
> {
	constructor(props) {
		super(props);
		this.state = {
			operations: [{}],
			input: "",
			output: "",
		};
	}

	calculate() {
		try {
			let result = analyzeFunctionString(this.state.input);
			this.setState({
				output: `
Сохраняет 0: ${result.keepsZero ? "Да" : "Нет"} ;
Сохраняет 1: ${result.keepsOne ? "Да" : "Нет"} ;
Монотонна: ${result.mono ? "Да" : "Нет"} ;
Линейна: ${result.linear ? "Да" : "Нет"} ;
Самодвойственна: ${result.s ? "Да" : "Нет"} ;
				`,
			});
		} catch (err) {
			this.setState({
				output: err.message,
			});
		}
	}

	onChangeHandler(e: JSX.TargetedEvent<HTMLInputElement, Event>) {
		e.preventDefault();
		let value = e.currentTarget.value;

		// Не принимать ничего кроме 0 и 1
		let regex = /[^10]+/g;

		console.log(value);
		if (value && regex.test(value)) {
			this.setState({
				input: this.state.input,
			});
			return;
		}

		this.setState(
			{
				input: value,
			},
			() => {
				if (value.length > 0) {
					console.log("calc");
					this.calculate();
				}
			}
		);
	}

	render() {
		return (
			<div>
				<h3>Ввод формулы:</h3>
				<input
					class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
					type="text"
					value={this.state.input}
					onInput={this.onChangeHandler.bind(this)}
				></input>
				<button
					class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={this.calculate.bind(this)}
				>
					Вычислить
				</button>
				<div id="output">{this.state.output}</div>
			</div>
		);
	}
}
