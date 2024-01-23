import {
  FormFieldFileInputDropzone,
  FormFieldFileInputPreview,
} from './components';
import { StyledFormFieldFileInputContainer } from './style';
import { useFormFieldFileInput } from './hooks';

const FormFieldFileInput = ({
  children,
  type,
  fieldName,
  extensions,
  maxFiles,
  dropzoneCaption,
  ...props
}) => {
  const { fileDetailsList, setFileDetailsList, updateFieldValues } =
    useFormFieldFileInput(fieldName);

  return (
    <StyledFormFieldFileInputContainer {...props}>
      <FormFieldFileInputDropzone
        type={type}
        extensions={extensions}
        fileDetailsList={fileDetailsList}
        setFileDetailsList={setFileDetailsList}
        updateFieldValues={updateFieldValues}
        maxFiles={maxFiles}
      >
        {dropzoneCaption}
      </FormFieldFileInputDropzone>
      {fileDetailsList.length !== 0 && (
        <FormFieldFileInputPreview
          type={type}
          fileDetailsList={fileDetailsList}
          setFileDetailsList={setFileDetailsList}
          updateFieldValues={updateFieldValues}
        />
      )}
    </StyledFormFieldFileInputContainer>
  );
};

export default FormFieldFileInput;
