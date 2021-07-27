import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [newListItem, setNewListItem] = useState("");
  const [todoListArray, setTodoListArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const listItem = {
      text: newListItem,
      complete: false
    }

    setTodoListArray([listItem, ...todoListArray]);
    setNewListItem("");
  }

  const handleRemoveListItem = (index) => {
    const filteredListArr = todoListArray.filter((_item, idx) => idx !== index);
    setTodoListArray(filteredListArr);
  }

  const handleToggleListItemComplete = (index) => {
    const updatedListItem = todoListArray.map((item, i) => {
      if (index === i) {
        item.complete = !item.complete;
      }
      return item;
    })
    setTodoListArray(updatedListItem);
  }

  return (
    <div className="App">
      <Form newListItem={newListItem}
        setNewListItem={setNewListItem}
        handleSubmit={handleSubmit} />
      {/* This lives in Form.js now */}
      {/* <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Add New ToDo Item:</label>
          <input autoFocus type="text" onChange={(e) => setNewListItem(e.target.value)}
            value={newListItem} />
          <button>Add ToDo</button>
        </div>
      </form> */}

      <div style={{ textAlign: 'center' }}>
        {
          <ToDoList
            todoListArray={todoListArray}
            handleToggleListItemComplete={handleToggleListItemComplete}
            handleRemoveListItem={handleRemoveListItem} />
          // this lives in ToDoList.js now
          // todoListArray.map((x, i) =>
          //   <div key={i}>
          //     <p style={x.complete ? { textDecoration: "line-through" } : null}>To Do: {x.text}</p>
          //     <input type="checkbox" onChange={() => {
          //       handleToggleListItemComplete(i);
          //     }} checked={x.complete} className="strikeThrough" />
          //     <button onClick={() => handleRemoveListItem(i)}>Remove</button>
          //   </div>
          // )
        }
      </div>
    </div >
  );//end return
}//end App

export default App;