import Form from 'components/common/Form';
import { useLoginForm } from './hooks';
import './styles.css';

const LoginForm = ({ ...props }) => {
  const { formikProps, errorMessage } = useLoginForm();

  return (
    <Form formikProps={formikProps} {...props}>
      <Form.InputField
        name="username"
        inputId="username"
        className="login-form__field"
      >
        Username
      </Form.InputField>
      <Form.InputField
        type="password"
        name="password"
        inputId="password"
        className="login-form__field"
      >
        Password
      </Form.InputField>
      <Form.ResponseMessage
        type="error"
        className="login-form__response-message"
      >
        {errorMessage}
      </Form.ResponseMessage>
      <Form.SubmitButton>Log in</Form.SubmitButton>
    </Form>
  );
};

export default LoginForm;
