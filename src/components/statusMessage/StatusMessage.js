import './statusMessage.scss';

const ErrorMessage = props => (
  <mark style={{ color: 'red' }}>
    {props.text}
  </mark>
);

const SuccessMessage = props => (
  <mark style={{ color: 'green' }}>
    {props.text || 'Success!'}
  </mark>
);

export const StatusMessage = (props) => {
  if (props.valid) {
    return <SuccessMessage />;
  }
  return <ErrorMessage />;
};

ErrorMessage.propTypes = { text: PropTypes.string };
SuccessMessage.propTypes = { text: PropTypes.string };
StatusMessage.propTypes = { valid: PropTypes.bool.isRequired };

ErrorMessage.defaultProps = { text: 'Error!' };
SuccessMessage.defaultProps = { text: 'Success!' };

