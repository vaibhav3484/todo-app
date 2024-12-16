import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import AddItem from "./AddItem";

const TodoItem = () => {

  const { todoItems } = useContext(TodoItemsContext);
  
  return (
    <div>
      {todoItems.map((item) => (
        <AddItem key={AddItem} 
        TodoName={item.TodoName}
        TodoDate={item.TodoDate}>
         </AddItem>
      ))}
    </div>
  );
};

export default TodoItem;

//<AddItem todoname="Melaa" tododate="3-10-2024" />
//        <AddItem todoname="Zilaa" tododate="10-10-2024" />
