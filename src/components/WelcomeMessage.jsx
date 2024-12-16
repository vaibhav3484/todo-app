import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";

const WelcomeMessage = () =>  {

    const { todoItems } = useContext(TodoItemsContext);
    
    return ( 
        todoItems.length === 0 && <p>Enjoy your Day *_* </p> 
    );
};

export default WelcomeMessage;