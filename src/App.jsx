
import { Route, Routes, Navigate } from 'react-router-dom'
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { CreateTodoPage } from 'pages/CreateTodo';
import { TodosPage } from 'pages/TodosPage/TodosPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistationPage from 'pages/RegistrationPage/RegistrationPage';
import { Layout } from 'components/AppBar/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operations';

const App = () => {
    const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);
        
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<PublicRoute/> }>
          <Route index element={<Navigate to="home" />} />
          <Route path='home' element={<h1>Hello World</h1>} />
          <Route path='/register' element={<RegistationPage/>} />
          <Route path="/login" element={<LoginPage />} />
         </Route>
        
        <Route element={ <PrivateRoute/> }>
          <Route path="/todos" element={<TodosPage />} />
              <Route path="/todos/create" element={<CreateTodoPage />} />
            </Route>
        </Route>
     </Routes>
  </>)
};

export default App;