import React from 'react';
import './componentName.scss';

export const ComponentName = props => (
  <div className="componentName">
    <ul>
      <li>Name: {props.firstName} {props.lastName}</li>
      <li>Age: {props.age}</li>
    </ul>
  </div>
);

ComponentName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number
};

ComponentName.defaultProps = {
  firstName: 'unknown',
  lastName: 'unknown',
  age: 'unknown'
};
