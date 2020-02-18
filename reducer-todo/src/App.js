import React, {useReducer} from 'react';
import './App.css';
import {reducer, initialNotes} from "./reducers/reducer.js";
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';


function App() {

  return (
    <div className="App">
      <TodoList/>
     
    </div>
  );
}

export default App;
