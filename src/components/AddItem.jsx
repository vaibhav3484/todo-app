import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store.jsx";

function AddItem({ TodoName, TodoDate }){
    
const{ deleteItem } = useContext(TodoItemsContext)
    return <div className="container text-center td-row">
                <div className="row">
                <div className="col">{TodoName}</div>
                <div className="col">{TodoDate}</div>
                <div className="col">
<button type="button" className="btn btn-danger td-buttton"
onClick={()=>deleteItem(TodoName)}
                >DELETE</button></div>
                </div>
            </div>
}

export default AddItem;