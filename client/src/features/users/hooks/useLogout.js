import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useLogoutMutation } from '../api';
import { logOut } from '../slices/auth';
import ToastService from 'services/ToastService';

const useLogout = () => {
  const [sendLogoutRequest] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await sendLogoutRequest().unwrap();
      dispatch(logOut());
    } catch (err) {
      ToastService.showError(err.error, 'logout-error');
    }

    navigate('/');
  }, [sendLogoutRequest, dispatch, navigate]);

  return { handleLogout };
};

export default useLogout;
