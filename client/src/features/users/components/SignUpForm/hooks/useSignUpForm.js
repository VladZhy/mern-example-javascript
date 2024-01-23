import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../../api';
import { setCredentials } from '../../../slices/auth';
import { SignUpSchema } from '../schemas';
import { initialValues } from '../config';

const useSignUpForm = () => {
  const [sendSignUpRequest] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = useCallback(
    async (formValues) => {
      try {
        const { username, email, password } = formValues;
        const res = await sendSignUpRequest({
          username,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        setErrorMessage(err?.data?.message || err.error);
      }
    },
    [sendSignUpRequest, dispatch, navigate]
  );

  const formikProps = useMemo(() => {
    return {
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: handleSignUp,
    };
  }, [handleSignUp]);

  return { formikProps, errorMessage };
};

export default useSignUpForm;
