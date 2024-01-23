import Form from 'components/common/Form';
import { useAccountSettingsForm } from './hooks';
import './styles.css';

const AccountSettingsForm = ({ ...props }) => {
  const { formikProps, response } = useAccountSettingsForm();

  return (
    <Form formikProps={formikProps} {...props}>
      <Form.InputField
        name="username"
        inputId="username"
        maxInputLength="16"
        className="account-settings-form__field"
      >
        Username
      </Form.InputField>
      <Form.InputField
        type="email"
        name="email"
        inputId="email"
        className="account-settings-form__field"
      >
        Email
      </Form.InputField>
      <Form.InputField
        type="password"
        name="password"
        inputId="password"
        maxInputLength="16"
        className="account-settings-form__field"
      >
        Password
      </Form.InputField>
      <Form.InputField
        type="password"
        name="confirmPassword"
        inputId="confirm-password"
        maxInputLength="16"
        className="account-settings-form__field"
      >
        Confirm password
      </Form.InputField>
      <Form.ResponseMessage
        type={response.type}
        className="account-settings-form__response-message"
      >
        {response.message}
      </Form.ResponseMessage>
      <Form.SubmitButton>Save</Form.SubmitButton>
    </Form>
  );
};

export default AccountSettingsForm;
