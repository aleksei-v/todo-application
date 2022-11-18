import { useDeleteTodoMutation } from "redux/todos/slice";
import { TodoLi, StyledBtn, StyledContent } from "./TodoListItem.styled";
import { useUpdateCompletedMutation } from "redux/todos/slice";

export const TodoListItem = (todo) => {
// { id, text, completed }
    const [updateCompleted] = useUpdateCompletedMutation();
    const [deleteTodo, { isLoading }] = useDeleteTodoMutation();
    // const handleToggle = () => {
    //     console.log(id)
    //     updateCompleted({ id, completed })
    // }
    return (
        <TodoLi>
             <input
        type="checkbox"
        checked={todo.completed}
                onChange={() => {
                    console.log(todo.id)
             updateCompleted(todo)
        }}
      />
            <StyledContent>{todo.text}</StyledContent>
            <StyledBtn onClick={() => deleteTodo(todo.id)} disabled={isLoading}>
                {isLoading
                    ? <span>Deleting...</span>
                    : <span>Delete</span>
                }
            </StyledBtn>
        </TodoLi>
    )
}