import { createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext = createContext({
    todoItems: [] ,
    addNewItem: () => {},
    deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === 'NEW_ITEM') {
      newTodoItems = [
        ...currTodoItems, 
        {TodoName:action.payload.itemName , TodoDate:action.payload.itemDueDate}
      ];
    
    } else if ( action.type === 'DELETE_ITEM') {
      newTodoItems = currTodoItems.filter(
        (item) => item.TodoName !==
       action.payload.itemName);
      
    }
    return newTodoItems;
  }

// eslint-disable-next-line react/prop-types
const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  
    const addNewItem = (itemName, itemDueDate) => {
     const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      },
     };
        dispatchTodoItems(newItemAction);
    };  
  
  
    const deleteItem = (todoItemName) => {
      const deleteItemAction = {
        type: "DELETE_ITEM",
        payload: {
          itemName: todoItemName,
        }
       };
    dispatchTodoItems(deleteItemAction);
      };
      return <TodoItemsContext.Provider 
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}>
        {children}
      </TodoItemsContext.Provider>
}

export default TodoItemsContextProvider;