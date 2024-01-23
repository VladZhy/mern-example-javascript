import { FormFieldTitle, FormFieldFileInput } from './components';

const FormFileInputField = ({
  children,
  type,
  name,
  extensions,
  maxFiles,
  dropzoneCaption,
  ...props
}) => {
  return (
    <div {...props}>
      <FormFieldTitle>{children}</FormFieldTitle>
      <FormFieldFileInput
        type={type}
        fieldName={name}
        extensions={extensions}
        maxFiles={maxFiles}
        dropzoneCaption={dropzoneCaption}
      />
    </div>
  );
};

export default FormFileInputField;
