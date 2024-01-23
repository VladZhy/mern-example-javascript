import { useCallback, useState } from 'react';

const useFormFieldPasswordInput = () => {
  const [type, setType] = useState('password');

  const showPassword = useCallback(() => {
    setType('text');
  }, []);

  const hidePassword = useCallback(() => {
    setType('password');
  }, []);

  return { type, showPassword, hidePassword };
};

export default useFormFieldPasswordInput;
