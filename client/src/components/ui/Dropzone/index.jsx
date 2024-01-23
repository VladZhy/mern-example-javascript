import { StyledDropzoneContainer } from './style';
import { useDropzone } from './hooks';

const Dropzone = ({
  children,
  type,
  extensions = [],
  onDrop,
  maxFiles,
  ...props
}) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone(type, extensions, onDrop, maxFiles);

  return (
    <StyledDropzoneContainer
      $isFocused={isFocused}
      $isDragAccept={isDragAccept}
      $isDragReject={isDragReject}
      {...getRootProps()}
      {...props}
    >
      <input {...getInputProps()} />
      {children}
    </StyledDropzoneContainer>
  );
};

export default Dropzone;
