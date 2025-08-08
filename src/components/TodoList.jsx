import { useTodos } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map(todo => <li key={todo.id}>{todo.text}</li>)
      ) : (
        <li>No todos yet!</li>
      )}
    </ul>
  );
}
