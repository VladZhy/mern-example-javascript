import StyledButtonWrapper from 'style/buttons/StyledButtonWrapper';
import { StyledModalHeaderContainer } from './style';
import { useModalContext } from './hooks';
import { LuX } from 'react-icons/lu';
import './styles.css';

const ModalHeader = ({ children, ...props }) => {
  const { onClose } = useModalContext();

  return (
    <StyledModalHeaderContainer {...props}>
      <p className="modal-header__title">{children}</p>
      <StyledButtonWrapper>
        <LuX
          alt="Close"
          title="Close"
          className="modal-header__close-button-icon"
          onClick={onClose}
        />
      </StyledButtonWrapper>
    </StyledModalHeaderContainer>
  );
};

export default ModalHeader;
