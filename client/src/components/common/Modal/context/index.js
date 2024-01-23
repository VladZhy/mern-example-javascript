import { createContext, useContext } from 'react';

const ModalContext = createContext();

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error(
      'Modal.* component must be rendered as child of Modal component'
    );
  }

  return modalContext;
};

export default ModalContext;

export { useModalContext };
