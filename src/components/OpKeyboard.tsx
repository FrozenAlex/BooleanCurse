import { Component, Fragment, h, JSX } from "preact";

let singleOps = [
	"1","0", "->", "and", "or", "xor", "pierce", "sheffer", "not"
]

export default class OpKeyboard extends Component<
	{
		onAdd: Function
	},{}
> {
	constructor(props) {
		super(props);
	}



	// Pass changes to the root component
	onAddHandler(e: any) {
		e.preventDefault();
		// Фильтруем значения здесь
		let value = e.target.innerText;
		console.log(value)
	    this.props?.onAdd(value);
	}

	render() {
		return (
			<Fragment>
				<div className="flex flex-wrap flex-row my-1 rounded justify-evenly">
                    {singleOps.map((equation, index)=> (
                         <button key={index} onClick={this.onAddHandler.bind(this)} className="block mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
                         {equation}
                        </button>
                    ))}
				</div>
			</Fragment>
		);
	}
}
