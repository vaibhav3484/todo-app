import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";


function App() {

  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo />
       <WelcomeMessage  />
      <TodoItem />  
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
