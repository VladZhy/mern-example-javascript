import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignUpForm from 'features/users/components/SignUpForm';
import './styles.css';

const SignUpPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <div className="sign-up-page-container">
      <h1 className="sign-up-page__heading">Sign up</h1>
      <SignUpForm className="sign-up-page__form" />
    </div>
  );
};

export default SignUpPage;
