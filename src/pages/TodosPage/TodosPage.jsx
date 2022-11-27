import { Box } from "theme/Box"
import { useGetTodoQuery } from "redux/todos/slice";
import { TodoListItem } from 'components/TodoListItem/TodoListItem';
import { BackLink } from './TodosPage.styled';
import { useEffect } from "react";
import TodoLoader from "components/Loaders/TodoLoader";

const TodosPage = () => {

    const { data: todos, error, isFetching, refetch } = useGetTodoQuery();
    useEffect(() => {
        refetch();
    }, [refetch]);
    console.log(todos)
    return (
        <Box>
            <BackLink to='/todos/create'>Create todo</BackLink>
            
            {isFetching && <TodoLoader/>}

            <ul>
                {todos && !isFetching && !error && todos.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} />
                ))}
            </ul>
        </Box>
    )
};

export default TodosPage;