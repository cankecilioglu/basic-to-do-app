import { useState } from "react";
import "./style.css";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handeleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          isCompleted: false,
        },
      ];
    });
    setNewItem("");
  }

  function toggleTodos(id: string, isCompleted: boolean) {
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
      <form className="new-item-form" onSubmit={handeleSubmit}>
        <div className="form-row">
          <h2 className="title">New Task</h2>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 className="header">To-Do-List</h1>
      <ul className="list">
        {todos.length === 0 && "No To-Do added yet."}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={(e) => toggleTodos(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
