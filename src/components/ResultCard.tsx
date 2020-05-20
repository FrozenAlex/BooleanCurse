import { Component, Fragment, h, JSX } from "preact";

let knownOps = {
	"1101": "Импликация",
	"0001": "Коньюнкция",
	"0111": "Дизъюнкция",
	"0110": "Сложение",
	"1000": "Стрелка Пирса",
	"1110": "Штрих Шеффера",
	"1001": "Эквивалентность",
	"1011": "Обратная импликация",
	"10": "Отрицание",
	"1": "Истина",
	"0": "Ложь",
};

export default class ResultCard extends Component<
	{
		result: {
			source: string;
			cortege: any;
			properties: {
				keepsZero: boolean;
				keepsOne: boolean;
				s: boolean;
				mono: boolean;
				linear: boolean;
			};
		};
	},
	{}
> {
	constructor(props) {
		super(props);
	}

	render() {
		let tP = [];
		let fP = [];

		let res = this.props.result.properties;
		if (res.keepsOne) tP.push("Сохраняет 1");
		if (res.keepsZero) tP.push("Сохраняет 0");
		if (res.mono) tP.push("Монотонна");
		if (res.linear) tP.push("Линейна");
		if (res.s) tP.push("Самодвойственна");

		if (!res.keepsOne) fP.push("Сохраняет 1");
		if (!res.keepsZero) fP.push("Сохраняет 0");
		if (!res.mono) fP.push("Монотонна");
		if (!res.linear) fP.push("Линейна");
		if (!res.s) fP.push("Самодвойственна");

		return (
			<Fragment>
				<div class="rounded overflow-hidden shadow-lg my-2">
					<div class="px-6 py-3">
						<div class="font-bold text-xl mb-2">
							{knownOps[this.props.result.cortege]
								? `${knownOps[this.props.result.cortege]} (${this.props.result.source})`
								: this.props.result.source}
						</div>
						<div class="font-light text-xl mb-1">Кортеж: {this.props.result.cortege}</div>
						{/* <p class="text-gray-700 text-base"></p> */}
					</div>
					<div class="px-6 py-2">
						{tP.map((prop) => (
							<span class="inline-block bg-green-300 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
								{prop}
							</span>
						))}
						{fP.map((prop) => (
							<span class="inline-block bg-gray-100 rounded-full px-3 my-1 py-1 text-sm font-semibold text-gray-500 mr-2">
								{prop}
							</span>
						))}
					</div>
				</div>
			</Fragment>
		);
	}
}
