import './button.scss';

export const Button = props => (
  // regular, green, salmon
  <input className={`${props.styles} button center`} type={props.type} value={props.value} />
);
