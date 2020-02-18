import React, {useReducer} from 'react';
import './components/Todo.css'
import TodoList from './components/TodoList.js';
import {Card, CardTitle} from 'reactstrap'


function App() {

  return (
    <div className="cardContainer">
      <Card style={{backgroundImage: 'linear-gradient(to bottom right, #a0ffe6, #81f5ff)', border: "10px solid #a0ffe6"}} className="cardClass">
        
        <CardTitle className="cardTitle">To-Do Application</CardTitle>

        <TodoList/>

     </Card>
    </div>
  );
}

export default App;
