import GlobalStyle from 'theme/GlobalStyle';
import { useDispatch } from 'react-redux';
import UserRoutes from 'components/Routes/UserRoutes';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operations';
import AuthLoader from 'components/Loaders/AuthLoader';

const App = () => {
    const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);
        
  return (
    <>
      <GlobalStyle/>
      {isRefresh
        ? <AuthLoader />
        : <UserRoutes />
      }
    </>);
};

export default App;