import React, {useReducer} from 'react';
import './App.css';
import {reducer, initialNotes} from "./reducers/reducer.js";
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';


function App() {

  const [state, dispatch] = useReducer(reducer, initialNotes);
  console.log(state, dispatch);

  return (
    <div className="App">
      <TodoList todosArray={state.todos}/>
    </div>
  );
}

export default App;
