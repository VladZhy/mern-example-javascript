import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../api';
import { setCredentials } from '../../../slices/auth';
import { LoginSchema } from '../schemas';
import { initialValues } from '../config';

const useLoginForm = () => {
	const [sendLoginRequest] = useLoginMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const handleLogIn = useCallback(
		async (formValues) => {
			try {
				const { username, password } = formValues;
				const res = await sendLoginRequest({ username, password }).unwrap();

				console.log(res.user);
				dispatch(setCredentials({ ...res.user }));
				navigate('/');
			} catch (error) {
				setErrorMessage(error?.data?.message || error?.error);
			}
		},
		[sendLoginRequest, dispatch, navigate]
	);

	const formikProps = useMemo(() => {
		return {
			initialValues,
			validationSchema: LoginSchema,
			onSubmit: handleLogIn
		};
	}, [handleLogIn]);

	return { formikProps, errorMessage };
};

export default useLoginForm;
