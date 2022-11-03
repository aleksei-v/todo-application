import { useDeleteTodoMutation } from "redux/todos";
import { TodoLi, StyledBtn, StyledContent } from "./TodoListItem.styled";

export const TodoListItem = ({id, text}) => {
    const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

    return (
        <TodoLi>
            <StyledContent>{text}</StyledContent>
            <StyledBtn onClick={() => deleteTodo(id)} disabled={isLoading}>
                {isLoading
                    ? <span>Deleting...</span>
                    : <span>Delete</span>
                }
            </StyledBtn>
        </TodoLi>
    )
}