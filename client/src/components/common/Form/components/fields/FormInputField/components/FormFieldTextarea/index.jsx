import { StyledFormFieldTextarea } from './style';
import { useFormInputFieldContext } from './hooks';

const FormFieldTextarea = ({ ...props }) => {
  const { inputProps } = useFormInputFieldContext();

  return <StyledFormFieldTextarea {...inputProps} {...props} />;
};

export default FormFieldTextarea;
