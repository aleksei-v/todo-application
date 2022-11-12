import { useCreateTodoMutation } from "redux/todos/todos";
import { Navigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const CreateTodoPage = () => {
    const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();


    const handleSubmit = async e => {
        e.preventDefault();

        const content = e.currentTarget.elements.text.value;
        
        createTodo(content);

        e.currentTarget.reset();

       Notify.success("Заметка создана!");
    }

  
    return (
        <>
            {isSuccess && <Navigate to="/todos"/>}
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="text" />
                <button type="submit" disabled={isLoading}>{
                    isLoading ?
                    <b>creating..</b>
                    : <span>Create new todo</span>}
                </button>
        </form>
        </>
    )
}