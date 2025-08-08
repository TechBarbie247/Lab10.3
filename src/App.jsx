import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <ThemeToggleButton />
      <h1>Todo App (Context API)</h1>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}
