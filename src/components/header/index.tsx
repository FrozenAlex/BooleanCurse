import { h } from 'preact';
import { Link } from 'preact-router';

const Header = () => (
	<header className="header">
		<h1 className="AppTitle text-center text-xl font-bold">Программа проверки полноты системы булевых функций</h1>
		<nav className="flex flex-row justify-center">
			<Link activeClassName="active" href="/" className="block text-blue-700">Главная</Link>
		</nav>
	</header>
);

export default Header;
