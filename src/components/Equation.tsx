import { Component, Fragment, h, JSX } from "preact";

export default class Equation extends Component<
	{
		value: string;
		key: number;
		id: number;
		onChange?: Function;
		onDelete?: Function;
		children?: any;
	},
	{
		value: string;
	}
> {
	constructor(props) {
		super(props);
	}

	// Pass changes to the root component
	onChangeHandler(e: any) {
		e.preventDefault();
		// Фильтруем значения здесь
		let value = e.target.value;
		this.props?.onChange(this.props.id, value);
	}

	render() {
		return (
			<Fragment>
				<div className="flex flex-row my-1  rounded-lg">
					<input
						class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal"
						type="text"
						value={this.props.value}
						onInput={this.onChangeHandler.bind(this)}
					></input>
					<button
						onClick={this.props?.onDelete.bind(this)}
						className="block mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
					>
						X
					</button>
				</div>
			</Fragment>
		);
	}
}
