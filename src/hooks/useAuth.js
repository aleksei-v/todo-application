import { useSelector } from 'react-redux';
import {
  selectUser,
  selectStatusError,
  selectStatusIsLoggedIn,
  selectStatusIsLoading,
  selectStatusIsRefreshing
} from 'redux/auth/selectors';


export const useAuth = () => {
  const userInfo = useSelector(selectUser);
  const isError = useSelector(selectStatusError);
  const isLoggedIn = useSelector(selectStatusIsLoggedIn);
  const isLoading = useSelector(selectStatusIsLoading);
  const isRefresh = useSelector(selectStatusIsRefreshing)
  return {
    userInfo,
    isError,
    isLoggedIn,
    isLoading,
    isRefresh,
  };
};