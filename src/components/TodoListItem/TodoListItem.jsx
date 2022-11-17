import { useDeleteTodoMutation } from "redux/todos/slice";
import { TodoLi, StyledBtn, StyledContent } from "./TodoListItem.styled";

export const TodoListItem = ({ id, text, completed}) => {
    const [deleteTodo, { isLoading }] = useDeleteTodoMutation();
    const handleToggle = (e) => {
        console.log(e)
    }
    return (
        <TodoLi>
             <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
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