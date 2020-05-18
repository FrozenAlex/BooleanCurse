import { h, render } from 'preact';
import './style/index';
import App from './components/app';

function renderApp() {
	render(
		<div>
			<App />
		</div>,
		document.querySelector("body")
	);
}
//start the process


// @ts-ignore
if (module.hot) {
    // @ts-ignore

	module.hot.accept() // already had this init code
	 // @ts-ignore 
	module.hot.accept('./', renderApp);

    // @ts-ignore

    module.hot.addStatusHandler(status => {
        if (status === 'prepare') console.clear()
    })
}

renderApp(); // Initial render