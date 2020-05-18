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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// Navigator
if ('serviceWorker' in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener('load', () => {
	// @ts-ignore
	  navigator.serviceWorker.register(((__webpack_public_path__)? __webpack_public_path__: "") + '/service-worker.js');
	});
  }
  