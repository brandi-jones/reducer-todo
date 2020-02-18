import React, {useState, useReducer} from "react"
import Todo from "./Todo.js";
import {reducer, initialNotes} from "../reducers/reducer.js";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

const TodoList = () => {

    
  const [state, dispatch] = useReducer(reducer, initialNotes);

  const [newTodo, setNewTodo] = useState('');

  const handleChanges = event => {
      setNewTodo(event.target.value);
  };

  console.log("rendered TodoList")
    return(
        <>
        
        <div className="todoList">
            {state.map(item => {
                return (
                    <div
                    onClick={() => {dispatch({type: "TOGGLE_COMPLETE", payload: item.id})}}
                    className={`item${item.completed ? ' completed' : ''}`}
                    >
                        <p> ♥ {item.item}</p>
                    </div>
                )
            })}
        </div>

        <div className="form">
        <Form>
            <FormGroup className="formGroup">
                <Label className="label" for="newItem">Add:</Label>
                <Input style={{width: "30%"}}
                type="text" 
                name="newItem" 
                value={newTodo}
                onChange={handleChanges}
                />
            </FormGroup>
            <Button id="buttonClass" onClick={ () => {
                dispatch({type: 'ADD_ITEM', payload: newTodo})
                setNewTodo("");
            }}>
                Add
            </Button>
            <Button id="buttonClass" onClick={ () => {
                dispatch({type: 'CLEAR_COMPLETE'})
            }}>
                Clear Completed
            </Button>
        </Form>
        </div>

        </>
    );
}

export default TodoList;