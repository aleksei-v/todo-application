
import { Route, Routes, Navigate } from 'react-router-dom'

import { CreateTodoPage } from 'pages/CreateTodo';
import { TodosPage } from 'pages/TodosPage/TodosPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { Layout } from 'components/Layout/Layout';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route>
          <Route index element={<Navigate to="home" />} />
          <Route path='home' element={<h1>Hello World</h1>} />
          <Route path='/register' element={<p>Registation</p>} />
          <Route path="/login" element={<LoginPage />} />
         </Route>
        
        
        <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/create" element={<CreateTodoPage />} />
          </Route>
     </Routes>
  </>)
};

export default App;