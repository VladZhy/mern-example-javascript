import { StyledFormFieldFileInputDropzone } from './style';
import { useFormFieldFileInputDropzone } from './hooks';
import { FiUpload } from 'react-icons/fi';
import './styles.css';

const FormFieldFileInputDropzone = ({
  children,
  type,
  extensions,
  fileDetailsList,
  setFileDetailsList,
  updateFieldValues,
  maxFiles,
  ...props
}) => {
  const { onDrop } = useFormFieldFileInputDropzone(
    fileDetailsList,
    setFileDetailsList,
    updateFieldValues,
    maxFiles
  );

  return (
    <StyledFormFieldFileInputDropzone
      type={type}
      extensions={extensions}
      onDrop={onDrop}
      maxFiles={maxFiles}
      {...props}
    >
      <FiUpload className="form-field-file-input-dropzone__icon" />
      <p className="form-field-file-input-dropzone__caption">{children}</p>
    </StyledFormFieldFileInputDropzone>
  );
};

export default FormFieldFileInputDropzone;
