import { Form as FormikForm, Formik } from 'formik';
import {
  FormInputField,
  FormFileInputField,
  FormResponseMessage,
  FormSubmitButton,
  FormSubmitButtonPropsProvider,
} from './components';

const Form = ({ children, formikProps, ...props }) => {
  return (
    <Formik {...formikProps}>
      <FormikForm {...props}>{children}</FormikForm>
    </Formik>
  );
};

Form.InputField = FormInputField;
Form.FileInputField = FormFileInputField;
Form.ResponseMessage = FormResponseMessage;
Form.SubmitButton = FormSubmitButton;
Form.SubmitButtonPropsProvider = FormSubmitButtonPropsProvider;

export default Form;
