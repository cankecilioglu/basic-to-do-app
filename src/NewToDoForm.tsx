import { useState } from "react";

export default function NewToDoForm({ addTodo }: any) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item" className="form-label">
          What needs to be done?
        </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
