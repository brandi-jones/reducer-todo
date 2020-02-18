import React, {useState, useReducer} from "react"
import {reducer, initialNotes} from "../reducers/reducer.js";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialNotes);
    

    const [newTodo, setNewTodo] = useState('');

    const handleChanges = event => {
        setNewTodo(event.target.value);
    };

    //class property to submit form
    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.addNewItem(this.state.newItem);
    //     this.setState({newItem: ''});
    // }
        
    return (
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
                <Button id="buttonClass">
                    Clear Completed
                </Button>
            </Form>
        </div>
       
    );
  
}

export default TodoForm;