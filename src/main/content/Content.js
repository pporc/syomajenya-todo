import React from 'react';
import './content.scss';

import { ListComponentName } from '../../listComponentName';
import { ComponentName } from '../../listComponentName/componentName';

const list = [
	{ firstName: "Jenya", lastName: "Syoma", age: "21" },
	{ firstName: "Vasya", lastName: "Artemiev", age: "27" },
	{ firstName: "Petya", lastName: "Kovalev", age: "34" },
	{ firstName: "Roma", lastName: "Alexeyev", age: "23" }
]

export const Content = () => (
	<section className="content">
		<ListComponentName list={list} />
	</section>
);