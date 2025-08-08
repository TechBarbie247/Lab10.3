import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD", text });
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
