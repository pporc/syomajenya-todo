import React from 'react';
import './number.scss';

const getAllNumbers = (from, to, odd, even) => {
	const numbers = [];
	const sort = odd ? 'odd' :
				even ? 'even' : false;
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

export const Number = ({ from, to, odd, even }) => (
	<section className="number">
		<ul>
			{
				getAllNumbers(from, to, odd, even).map( item => (
					<li key={item}>
						{item}
					</li>
				))
			}
		</ul>
	</section>
);