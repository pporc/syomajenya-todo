import './error.scss';

export const Error = props => <mark style={ {color: props.color, display: props.display} }>{props.text || 'Error!'}</mark>;