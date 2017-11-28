import React from 'react';

const getCreation = () => {
	const hours = new Date().getHours();

	if (hours > 22 || hours > 0 && hours <= 3) { return 'Good night'; }

	if (hours > 3 && hours < 12) { return 'Good morning'; }

	if (hours >= 12 && hours < 18) { return 'Good afternoon'; }

	return 'Good evening';
}

export const Greeting = ({ name }) => (
	<span className="greeting">
		{getCreation()}, {name || 'User'}
	</span>
);