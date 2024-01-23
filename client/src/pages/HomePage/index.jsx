import { useSelector } from 'react-redux';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <p>Welcome, {userInfo.username}</p>
      ) : (
        <>
          <p>Please, log in</p>
        </>
      )}
    </>
  );
};

export default HomePage;
