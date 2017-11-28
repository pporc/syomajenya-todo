import React from 'react';
import './number.scss';

const getAllNumbers = (...props) => {
	const numbers = [];
	const from = props[0];
	const to = props[1];
	const sort = props[2] ? 'odd' :
				props[3] ? 'even' : false;
	let list;

	for (let i = from; i <= to; i++) {
		numbers.push(i);	
	};

	if (sort == 'even') {
		list = numbers.filter( num => !(num % 2))
	} else if (sort == 'odd') {
		list = numbers.filter( num => num % 2)
	} else {
		list = numbers;
	}
	
	return list;
};

export const Number = (props) => (
	<section className="number">
		<ul>
			{
				getAllNumbers(props.from, props.to, props.odd, props.even).map( item => (
					<li key={item}>
						{item}
					</li>
				))
			}
		</ul>
	</section>
);