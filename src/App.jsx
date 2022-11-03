
import { Route, Routes, Navigate } from 'react-router-dom'

import { CreateTodoPage } from 'pages/CreateTodo';
import { TodosPage } from 'pages/TodosPage/TodosPage';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/create" element={<CreateTodoPage />} />
     </Routes>
  </>)
};

export default App;