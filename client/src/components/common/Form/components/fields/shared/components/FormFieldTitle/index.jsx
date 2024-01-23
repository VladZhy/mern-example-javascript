import { StyledFormFieldTitle } from './style';

const FormFieldTitle = ({ children, ...props }) => {
  return <StyledFormFieldTitle {...props}>{children}</StyledFormFieldTitle>;
};

export default FormFieldTitle;
