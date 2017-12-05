import './main.scss';

import { Aside } from './aside';
import { Content } from './content';
import { Number } from '../number';

export class Main extends React.Component {
	render () {
		return (
			<main className="main">
				<Aside />
				<Content />
				<Number
					from={3}
					to={9}
					odd
				/>
			</main>
		);
	}
};
