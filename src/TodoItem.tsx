// TodoItem.tsx
import React from "react";

interface TodoItemProps {
  id: string;
  isCompleted: boolean;
  title: string;
  toggleTodo: (id: string, isCompleted: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  isCompleted,
  title,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
