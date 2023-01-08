import AddTask from "components/icons/AddTask";
import { useState } from "react";
import uniqid from 'uniqid';
import { Notify } from "notiflix";

const CreateTodoField = ({ setTodos }) => {
    
    const [title, setTitle] = useState('');

    const addTodo = title => {
        if (title === '') {
            Notify.failure("Enter a task")
            return
        }
    setTodos(prev =>[{
      id: uniqid(),
      title,
      isCompleted: false
    }, ...prev])
        setTitle('');
        Notify.success("A task was created");
  };

  return (
      <div className="flex items-center justify-between rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mb-10">
          <button onClick={() => {addTodo(title)}} className='mr-5'>
              <AddTask/>
          </button>
          <input
              type="text"
              onChange={e => setTitle(e.target.value)}
              value={title}
              onKeyDown={e => e.key === 'Enter' && addTodo(title)}
              className='bg-transparent w-full border-none outline-none'
              placeholder="Add a task to complete"
              />

    </div>
  )
}

export default CreateTodoField