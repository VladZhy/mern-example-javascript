import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import useModal from '../../../../../hooks/useModal';
import { useCreateGuideMutation } from '../../../api';
import ToastService from 'services/ToastService';
import { NewGuideSchema } from '../schemas';
import { initialValues } from '../config';

const useNewGuideModalButton = () => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const [sendCreateGuideRequest] = useCreateGuideMutation();
  const initialInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitButtonProps, setFormSubmitButtonProps] = useState({});

  const handleCreateNewGuide = useCallback(
    async (formValues) => {
      try {
        const { title, description, thumbnail } = formValues;

        //store res text and show it as successful toast
        const res = await sendCreateGuideRequest({
          title,
          description,
          thumbnail,
        }).unwrap();

        ToastService.showSuccess(res.message, 'create-new-guide-success');
        setErrorMessage('');
      } catch (error) {
        setErrorMessage(error?.data?.message || error?.error);
      }
    },
    [sendCreateGuideRequest]
  );

  const formFormikProps = useMemo(() => {
    return {
      initialValues,
      validationSchema: NewGuideSchema,
      onSubmit: handleCreateNewGuide,
    };
  }, [handleCreateNewGuide]);

  useEffect(() => {
    if (isModalOpen) {
      initialInputRef.current.focus();
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
    openModal,
    closeModal,
    formFormikProps,
    formSubmitButtonProps,
    setFormSubmitButtonProps,
    initialInputRef,
    errorMessage,
  };
};

export default useNewGuideModalButton;
