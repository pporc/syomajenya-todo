import React from 'react';

import { Navigation } from '../navigation'
import { Greeting } from './greeting'
import './header.scss';

export const Header = () => (
	<header className="header">
		<Navigation
			list={['Home', 'Products', 'Contacts']}
		/>
		<Greeting
			name="Jenya"
		/>
	</header>
);