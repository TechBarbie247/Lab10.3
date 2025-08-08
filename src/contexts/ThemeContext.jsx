import { createContext, useReducer, useEffect, useContext } from "react";

const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
