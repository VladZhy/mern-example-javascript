import { StyledFormFieldInput } from './style';
import { useFormInputFieldContext } from './hooks';

const FormFieldInput = ({ ...props }) => {
  const { inputProps } = useFormInputFieldContext();

  return <StyledFormFieldInput {...inputProps} {...props} />;
};

export default FormFieldInput;
