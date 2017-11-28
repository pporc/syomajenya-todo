import React from 'react';
import './main.scss';

import { Aside } from './aside';
import { Content } from './content';
import { Number } from '../number';

export const Main = () => (
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