import { useEffect } from 'react';
import useLogout from 'features/users/hooks/useLogout';
import StyledLoader from 'style/StyledLoader';
import './styles.css';

const LogoutPage = () => {
  const { handleLogout } = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <div className="logout-page-container">
      <h1>Logging out</h1>
      <StyledLoader className="logout-page__loader" />
    </div>
  );
};

export default LogoutPage;
