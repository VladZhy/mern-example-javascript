import { createContext, useContext } from 'react';

const FormInputFieldContext = createContext();

const useFormInputFieldContext = () => {
  const formInputFieldContext = useContext(FormInputFieldContext);

  if (!formInputFieldContext) {
    throw new Error(
      'FormInputField.* component must be rendered as child of FormInputField component'
    );
  }

  return formInputFieldContext;
};

export default FormInputFieldContext;

export { useFormInputFieldContext };
