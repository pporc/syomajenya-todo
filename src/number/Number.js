import React from 'react';
import './number.scss';

const getAllNumbers = (from, to, odd, even) => {
	let list = [];

	for (let i = from; i <= to; i++) {
		list.push(i);	
	};

	if (odd && even) {
		list = list;
	} else if (odd) {
		list = list.filter( num => num % 2);
	} else if (even){
		list = list.filter( num => !(num % 2));
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