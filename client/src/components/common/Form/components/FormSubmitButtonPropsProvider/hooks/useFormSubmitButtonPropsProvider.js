import { useFormikContext } from 'formik';
import { useEffect } from 'react';

const useFormSubmitButtonPropsProvider = (setProps) => {
  const { dirty, isSubmitting, errors, handleSubmit } = useFormikContext();

  useEffect(() => {
    setProps({
      isSubmitting,
      disabled: !dirty || isSubmitting || Object.keys(errors).length,
      onClick: handleSubmit,
    });
  }, [dirty, isSubmitting, errors, handleSubmit, setProps]);
};

export default useFormSubmitButtonPropsProvider;
