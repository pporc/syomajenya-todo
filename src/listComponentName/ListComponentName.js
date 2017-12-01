import React from 'react';
import './listComponentName.scss';

import { ComponentName } from './componentName';

export const ListComponentName = (props) => (
	<div className="listComponentName">
		{
			props.list.map( component => (
				<ComponentName 
					{...component} 
					key={component.firstName+component.lastName}
				/>
			))
		}
	</div>
);