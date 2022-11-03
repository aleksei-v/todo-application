import { Box } from "components/Box"
import { useGetTodoQuery } from "redux/todos";
import { TodoListItem } from 'components/TodoListItem/TodoListItem';
import { BackLink } from './TodosPage.styled';

export const TodosPage = () => {

    const { data: todos, error, isFetching } = useGetTodoQuery();
    

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