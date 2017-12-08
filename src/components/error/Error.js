import './error.scss';

export const Error = props => (
  <mark
    style={{ color: props.color, display: props.display }}
  >
    {props.text || 'Error!'}
  </mark>
);

Error.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string
};

Error.defaultProps = {
  color: 'red',
  display: 'none'
};
