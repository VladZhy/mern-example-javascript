import { useCallback, useEffect, useRef } from 'react';

const useModal = (isOpen, onClose) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef?.current.showModal();
    } else {
      modalRef?.current.close();
    }
  }, [isOpen]);

  const handleClickOutside = useCallback(
    (e) => {
      const modalDimensions = modalRef.current.getBoundingClientRect();

      if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
      ) {
        onClose();
      }
    },
    [onClose]
  );

  return { modalRef, handleClickOutside };
};

export default useModal;
