import Form from 'components/common/Form';
import { useSignUpForm } from './hooks';
import './styles.css';

const SignUpForm = ({ ...props }) => {
  const { formikProps, errorMessage } = useSignUpForm();

  return (
    <Form formikProps={formikProps} {...props}>
      <Form.InputField
        name="username"
        inputId="username"
        maxInputLength="16"
        className="sign-up-form__field"
      >
        Username
      </Form.InputField>
      <Form.InputField
        type="email"
        name="email"
        inputId="email"
        className="sign-up-form__field"
      >
        Email
      </Form.InputField>
      <Form.InputField
        type="password"
        name="password"
        inputId="password"
        maxInputLength="16"
        className="sign-up-form__field"
      >
        Password
      </Form.InputField>
      <Form.InputField
        type="password"
        name="confirmPassword"
        inputId="confirm-password"
        maxInputLength="16"
        className="sign-up-form__field"
      >
        Confirm password
      </Form.InputField>
      <Form.ResponseMessage
        type="error"
        className="sign-up-form__response-message"
      >
        {errorMessage}
      </Form.ResponseMessage>
      <Form.SubmitButton>Sign up</Form.SubmitButton>
    </Form>
  );
};

export default SignUpForm;
