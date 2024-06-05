import { useEffect, useState } from "react";
import "./style.css";
import NewToDoForm from "./NewToDoForm.tsx";
import TodoList from "./TodoList.tsx";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>((): any => {
    const localValues: any = localStorage.getItem("ITEMS");
    if (localValues == null) return [];

    return JSON.parse(localValues);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          isCompleted: false,
        },
      ];
    });
  }

  function toggleTodo(id: string, isCompleted: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm addTodo={addTodo} />
      <h1 className="header">To-Do-List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
