import { StyledFormFieldError } from './style';

const FormFieldError = ({ children, ...props }) => {
  return <StyledFormFieldError {...props}>{children}</StyledFormFieldError>;
};

export default FormFieldError;
