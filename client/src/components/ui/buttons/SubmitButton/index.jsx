import { StyledSubmitButton } from './style';

const SubmitButton = ({ children, isSubmitting, ...props }) => {
  return (
    <StyledSubmitButton $isSubmitting={isSubmitting} {...props}>
      <span>{children}</span>
    </StyledSubmitButton>
  );
};

export default SubmitButton;
