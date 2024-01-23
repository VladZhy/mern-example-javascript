import { ModalHeader, ModalBody, ModalFooter } from './components';
import StyledDialog from 'style/StyledDialog';
import { useModal } from './hooks';
import ModalContext from './context';

const Modal = ({ children, isOpen, onClose, ...props }) => {
  const { modalRef, handleClickOutside } = useModal(isOpen, onClose);

  return (
    <StyledDialog
      ref={modalRef}
      onCancel={onClose}
      onClick={handleClickOutside}
      {...props}
    >
      <ModalContext.Provider value={{ onClose }}>
        {children}
      </ModalContext.Provider>
    </StyledDialog>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
