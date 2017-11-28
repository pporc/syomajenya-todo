import React from 'react';
import './navigation.scss';

const items = [
	{label: 'Home', id: 'asdfasdfa4'},
	{label: 'Contacts', id: 'asdasdfdff'}
];

export const Navigation = () => (
	<nav className="main-nav">
		<ul>
			{
				items.map( item => (
					<li key={item.id}>
						<a href={`/${item.label.toLowerCase()}`}>{item.label}</a>
					</li>
				))
			}
		</ul>	
	</nav>
);