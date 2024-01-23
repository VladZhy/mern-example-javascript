import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from 'features/users/components/LoginForm';
import './styles.css';

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <div className="login-page-container">
      <h1 className="login-page__heading">Log in</h1>
      <LoginForm className="login-page__form" />
    </div>
  );
};

export default LoginPage;
