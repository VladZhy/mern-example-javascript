import { useField } from 'formik';
import { useCallback, useMemo, useState } from 'react';

const useFormInputField = (name, inputId, inputRef, maxInputLength) => {
  const [{ onBlur: onInputBlur, ...field }, meta] = useField(name);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleOnInputFocus = useCallback(() => {
    setIsInputFocused(true);
  }, []);

  const handleOnInputBlur = useCallback(
    (e) => {
      onInputBlur(e);
      setIsInputFocused(false);
    },
    [onInputBlur]
  );

  const isInvalid = useMemo(() => {
    return meta.touched && meta.error;
  }, [meta]);

  const inputProps = useMemo(() => {
    return {
      id: inputId,
      ref: inputRef,
      maxLength: maxInputLength,
      onFocus: handleOnInputFocus,
      onBlur: handleOnInputBlur,
      $isInvalid: isInvalid,
      ...field,
    };
  }, [
    inputId,
    inputRef,
    maxInputLength,
    handleOnInputFocus,
    handleOnInputBlur,
    isInvalid,
    field,
  ]);

  const isCharacterCountdownVisible = useMemo(() => {
    return maxInputLength && isInputFocused && !isInvalid;
  }, [maxInputLength, isInputFocused, isInvalid]);

  const errorMessage = useMemo(() => {
    return isInvalid ? meta.error : null;
  }, [isInvalid, meta.error]);

  return { inputProps, isCharacterCountdownVisible, errorMessage };
};

export default useFormInputField;
