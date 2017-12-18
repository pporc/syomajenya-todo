import { Form } from 'components/form';

export const Login = props => (

  props.isLoading ? <mark>loading...</mark> :
  <Form
    exclude={['firstname', 'secondname', 'repeat password']}
    submit={props.login}
  />
);
