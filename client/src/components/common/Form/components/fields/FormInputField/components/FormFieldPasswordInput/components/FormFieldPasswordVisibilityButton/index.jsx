import { StyledFormFieldPasswordVisibilityButton } from './style';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './styles.css';

const FormFieldPasswordVisibilityButton = ({
  isPasswordHidden,
  showPassword,
  hidePassword,
  ...props
}) => {
  return isPasswordHidden ? (
    <StyledFormFieldPasswordVisibilityButton
      onClick={showPassword}
      title="Show password"
      {...props}
    >
      <AiFillEyeInvisible
        alt="Show password"
        className="form-field-password-visibility-button__icon"
      />
    </StyledFormFieldPasswordVisibilityButton>
  ) : (
    <StyledFormFieldPasswordVisibilityButton
      onClick={hidePassword}
      title="Hide password"
      {...props}
    >
      <AiFillEye
        alt="Hide password"
        className="form-field-password-visibility-button__icon"
      />
    </StyledFormFieldPasswordVisibilityButton>
  );
};

export default FormFieldPasswordVisibilityButton;
