import { useCreateTodoMutation } from "redux/todos/slice";
import { Navigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from "theme/Box";

const CreateTodoPage = () => {
    const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();


    const handleSubmit = async e => {
        e.preventDefault();

        const content = e.currentTarget.elements.text.value;
        console.log(content)
        createTodo(content);
        console.log(isSuccess)

        e.currentTarget.reset();

        Notify.success("Заметка создана!");
    }

  
    return (
        <Box p={6}>
            {isSuccess && <Navigate to="/todos" />}
            <Box as='form' display='flex' gridGap={5} autoComplete="off" onSubmit={handleSubmit}>
                <Box as='input' width='300px' type="text" name="text" />
                <button type="submit" disabled={isLoading}>{
                    isLoading ?
                        <b>creating..</b>
                        : <span>Create new todo</span>}
                </button>
            </Box>
        </Box>
    )
};

export default CreateTodoPage;