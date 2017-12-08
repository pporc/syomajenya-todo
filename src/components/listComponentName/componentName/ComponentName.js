import React from 'react';
import './componentName.scss';

export const ComponentName = (props) => (
	<div className="componentName">
		<ul>
    		<li>Name: {props.firstName} {props.lastName}</li>
    		<li>Age: {props.age}</li>
  		</ul>
	</div>
);