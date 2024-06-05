// TodoList.tsx
import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  isCompleted: boolean;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, isCompleted: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No To-Do added yet."}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          title={todo.title}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
