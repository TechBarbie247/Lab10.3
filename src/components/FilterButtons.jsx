import { useFilter } from "../contexts/FilterContext";

export default function FilterButtons() {
  const { setFilter } = useFilter();
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

