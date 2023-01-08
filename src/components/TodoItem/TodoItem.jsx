import CheckBox from "components/icons/CheckBox";
import RemoveIcon from "components/icons/RemoveIcon";
import cn from "classnames";

const TodoItem = ({title, id, isCompleted, changeCompleted, removeTodo}) => {
    return (
      <li>
        <div
          className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      
        >
        <button className="flex items-center" onClick={() => changeCompleted(id)}>
          <CheckBox isCompleted={isCompleted} />
          <span className={cn({
            'line-through': isCompleted
          })}>
            {title}
            </span>
          </button>
          <button onClick={() => {
            removeTodo(id)
          }}>
            <RemoveIcon/>
          </button>
          
            </div>
        </li>
  )
}

export default TodoItem