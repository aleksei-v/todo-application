import { useState } from "react";
import TodoItem from "components/TodoItem/TodoItem";
import data from './todos.json'
import CreateTodoField from "components/CreateTodo/CreateTodoField";



const App = () => {
  const [todos, setTodos] = useState(data);
  const changeCompleted = id => {
    const copiedTodos = [...todos];
    const currentTodo = copiedTodos.find(el => el.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copiedTodos)
  }
  const removeTodo = id => {
    setTodos([...todos].filter(el => el.id !==id))
  }
  
  return (
    
    <>
      <div className="mx-auto w-4/5 text-white">
        <h1 className="text-2xl font-bold text-center mb-4">#todo</h1> 
        <CreateTodoField setTodos={setTodos} />
      <ul>
        {todos.map(todo =>
          (<TodoItem key={todo.id} {...todo} changeCompleted={changeCompleted} removeTodo={removeTodo} />)
          )}        
        </ul>
        </div>
    </>     
   );
};

export default App;

