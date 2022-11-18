import { Box } from "theme/Box"
import { useGetTodoQuery } from "redux/todos/slice";
import { TodoListItem } from 'components/TodoListItem/TodoListItem';
import { BackLink } from './TodosPage.styled';
import { useEffect } from "react";

const TodosPage = () => {

    const { data: todos, error, isFetching, refetch } = useGetTodoQuery();
    useEffect(() => {
        refetch();
    }, [refetch]);
    return (
        <Box>
            <BackLink to='/todos/create'>Create todo</BackLink>
            
            {isFetching && <b>Is loading...</b>}

            <ul>
                {todos && !isFetching && !error && todos.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} />
                ))}
            </ul>
        </Box>
    )
};

export default TodosPage;