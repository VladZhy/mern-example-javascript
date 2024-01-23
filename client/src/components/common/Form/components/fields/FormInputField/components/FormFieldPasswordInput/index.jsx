import {
  FormFieldInput,
  FormFieldPasswordVisibilityButton,
} from './components';
import { StyledFormFieldPasswordInputContainer } from './style';
import { useFormFieldPasswordInput } from './hooks';
import './styles.css';

const FormFieldPasswordInput = ({ ...props }) => {
  const { type, showPassword, hidePassword } = useFormFieldPasswordInput();

  return (
    <StyledFormFieldPasswordInputContainer {...props}>
      <FormFieldInput
        type={type}
        autoComplete="on"
        className="form-field-password-input"
        {...props}
      />
      <FormFieldPasswordVisibilityButton
        isPasswordHidden={type === 'password'}
        showPassword={showPassword}
        hidePassword={hidePassword}
      />
    </StyledFormFieldPasswordInputContainer>
  );
};

export default FormFieldPasswordInput;
