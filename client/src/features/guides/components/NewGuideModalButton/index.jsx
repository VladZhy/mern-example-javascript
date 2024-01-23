import ActionIconButton from 'components/ui/buttons/ActionIconButton';
import Form from 'components/common/Form';
import Modal from 'components/common/Modal';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import StyledButton from 'style/buttons/StyledButton';
import { useNewGuideModalButton } from './hooks';
import { FaPlus } from 'react-icons/fa';
import './styles.css';

const NewGuideModalButton = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    formFormikProps,
    formSubmitButtonProps,
    setFormSubmitButtonProps,
    initialInputRef,
    errorMessage,
  } = useNewGuideModalButton();

  return (
    <>
      <ActionIconButton label="New guide" onClick={openModal}>
        <FaPlus />
      </ActionIconButton>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="new-guide-modal-button__modal"
      >
        <Modal.Header className="new-guide-modal-button__modal__header">
          New guide
        </Modal.Header>
        <Modal.Body>
          <Form
            formikProps={formFormikProps}
            className="new-guide-modal-button__modal__body__form"
          >
            <Form.InputField
              name="title"
              inputId="title"
              inputRef={initialInputRef}
              maxInputLength="100"
              className="new-guide-modal-button__modal__body__form__field"
            >
              Title
            </Form.InputField>
            <Form.InputField
              type="textarea"
              name="description"
              inputId="description"
              maxInputLength="500"
              className="new-guide-modal-button__modal__body__form__field"
            >
              Description
            </Form.InputField>
            <Form.FileInputField
              type="image"
              name="thumbnail"
              maxFiles={1}
              dropzoneCaption="Upload thumbnail"
              className="new-guide-modal-button__modal__body__form__field"
            >
              Thumbnail
            </Form.FileInputField>
            <Form.SubmitButtonPropsProvider
              setProps={setFormSubmitButtonProps}
            />
            <Form.ResponseMessage
              type="error"
              className="new-guide-modal-button__modal__body__form__response-message"
            >
              {errorMessage}
            </Form.ResponseMessage>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <StyledButton onClick={closeModal}>Cancel</StyledButton>
          <SubmitButton {...formSubmitButtonProps}>Create</SubmitButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewGuideModalButton;
