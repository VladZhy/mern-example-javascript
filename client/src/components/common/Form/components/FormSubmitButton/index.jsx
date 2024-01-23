import SubmitButton from 'components/ui/buttons/SubmitButton';
import { useFormikContext } from 'formik';

const FormSubmitButton = ({ children, ...props }) => {
  const { dirty, isSubmitting, errors } = useFormikContext();

  return (
    <SubmitButton
      isSubmitting={isSubmitting}
      disabled={!dirty || isSubmitting || Object.keys(errors).length}
      {...props}
    >
      <span>{children}</span>
    </SubmitButton>
  );
};

export default FormSubmitButton;
