import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

 const handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    
  }; 

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center td-row">
      <div className="row" onSubmit={handleAddButtonClicked}>
        <div className="col">
          <input
            type="text"
            placeholder="Enter What Todo ?"
            value={todoName}
            onChange={handleNameChange}
          />{" "}
        </div>
        <div className="col">
          <input type="date"
          value={dueDate} 
          onChange={handleDateChange} 
          />
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success td-buttton"
            onClick={handleAddButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
