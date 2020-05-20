import { h, Component } from 'preact';
import { RouterOnChangeArgs } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
// import Profile from '../routes/profile';

export default class App extends Component {
	currentUrl:string;

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = (e: RouterOnChangeArgs) => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" className="mx-auto max-w-md">
				<Header />
				<Home />
			</div>
		);
	}
}
