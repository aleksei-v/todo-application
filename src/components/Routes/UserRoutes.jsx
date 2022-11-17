import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { Layout } from 'components/AppBar/Layout/Layout';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const TodosPage = lazy(() => import('pages/TodosPage/TodosPage'));
const CreateTodoPage = lazy(() => import('pages/CreateTodo/CreateTodo'))

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route element={<PublicRoute />}>
                    <Route index element={<Navigate to="home" />} />
                    <Route path='home' element={<HomePage/>} />
                    <Route path='/register' element={<RegistationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
        
                <Route element={<PrivateRoute />}>
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/todos/create" element={<CreateTodoPage />} />
                </Route>
            </Route>
        </Routes>
    )
};

export default UserRoutes;