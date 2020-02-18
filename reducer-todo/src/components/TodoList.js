import React, {useReducer} from "react"
import Todo from "./Todo.js";
import {reducer, initialNotes} from "../reducers/reducer.js";

const TodoList = () => {

    
  const [state, dispatch] = useReducer(reducer, initialNotes);
  console.log(state, dispatch);

    return(
        <div className="todoList">
            {state.todos.map(item => {
                return (
                    <div
                    className={`item${item.completed ? ' completed' : ''}`}
                    >
                        <p> ♥ {item.item}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoList;