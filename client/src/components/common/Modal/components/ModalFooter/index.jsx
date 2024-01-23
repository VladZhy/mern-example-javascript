import { StyledModalFooterContainer } from './style';

const ModalFooter = ({ children, ...props }) => {
  return (
    <StyledModalFooterContainer {...props}>
      {children}
    </StyledModalFooterContainer>
  );
};

export default ModalFooter;
