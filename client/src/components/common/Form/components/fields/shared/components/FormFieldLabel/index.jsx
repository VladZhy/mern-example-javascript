import { StyledFormFieldLabel } from './style';

const FormFieldLabel = ({ children, ...props }) => {
  return <StyledFormFieldLabel {...props}>{children}</StyledFormFieldLabel>;
};

export default FormFieldLabel;
