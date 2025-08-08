# Context API Todo App

This is a simple **Todo application** built with **React** and **Vite** that demonstrates how to use the **Context API** for state management.  
The app allows you to:
- Add todos
- Filter todos (All, Active, Completed)
- Toggle between Light and Dark themes
- Persist todos and theme preference in `localStorag
  ##  Features
- **React Context API** for global state:
  - `TodoContext` → Manages todos and updates
  - `FilterContext` → Manages the current filter
  - `ThemeContext` → Manages light/dark mode
- **Local Storage** persistence
- **Vite** for fast development
- Functional components with hooks (`useState`, `useReducer`, `useEffect`, `useContext`)
# While building this project, I ran into a blank page issue when running npm run dev:

Forgot to wrap <App /> inside the context providers
Without wrapping components in AppProviders, useContext() returned undefined and nothing rendered.

index.html mount point check
I verified that <div id="root"></div> existed — React needs this to attach the app.

Silent console warnings
The browser console (F12 → Console) revealed useContext being used outside of a provider.
# References
React Official Docs: https://react.dev

React Context API: https://react.dev/reference/react/createContext