import {
  FormFieldLabel,
  FormFieldError,
  FormFieldInput,
  FormFieldPasswordInput,
  FormFieldTextarea,
  FormFieldCharacterCountdown,
} from './components';
import { useFormInputField } from './hooks';
import FormInputFieldContext from './context';

const FormInputField = ({
  children,
  type,
  name,
  inputId,
  inputRef,
  maxInputLength,
  ...props
}) => {
  const { inputProps, isCharacterCountdownVisible, errorMessage } =
    useFormInputField(name, inputId, inputRef, maxInputLength);

  return (
    <div {...props}>
      <FormFieldLabel htmlFor={inputId}>{children}</FormFieldLabel>
      <FormInputFieldContext.Provider value={{ inputProps }}>
        {type === 'email' ? (
          <FormFieldInput type="email" />
        ) : type === 'password' ? (
          <FormFieldPasswordInput />
        ) : type === 'textarea' ? (
          <FormFieldTextarea />
        ) : (
          <FormFieldInput />
        )}
      </FormInputFieldContext.Provider>
      {isCharacterCountdownVisible && (
        <FormFieldCharacterCountdown
          maxCharacters={maxInputLength}
          inputValue={inputProps.value}
        />
      )}
      {errorMessage && <FormFieldError>{errorMessage}</FormFieldError>}
    </div>
  );
};

export default FormInputField;
