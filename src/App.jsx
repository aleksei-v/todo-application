
import { Route, Routes, Navigate } from 'react-router-dom'

import { CreateTodoPage } from 'pages/CreateTodo';
import { TodosPage } from 'pages/TodosPage/TodosPage';
import LoginPage from 'pages/LoginPage/LoginPage';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos/create" element={<CreateTodoPage />} />
     </Routes>
  </>)
};

export default App;