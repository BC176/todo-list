import './App.css';
import React, { useState } from 'react';
// import Todo from './components/Todo';

function App() {

  const [newListItem, setNewListItem] = useState("");
  const [createListArr, setCreateListArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const listItem = {
      text: newListItem,
      complete: false
    }

    setCreateListArr([listItem, ...createListArr]);
    setNewListItem("");
  }

  const handleRemoveListItem = (index) => {
    const filteredListArr = createListArr.filter((item, idx) => idx !== index);
    setCreateListArr(filteredListArr);
  }

  const handleToggleListItemComplete = (index) => {
    const updatedListItem = createListArr.map((item, i) => {
      if (index === i) {
        item.complete = !item.complete;
      }
      return item;
    })
    setCreateListArr(updatedListItem);
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Add New ToDo Item:</label>
          <input autoFocus type="text" onChange={(e) => setNewListItem(e.target.value)}
            value={newListItem} />
          <input type="submit" name="box"
            id="addListItem" value="Add" />
        </div>
      </form>

      <div style={{ textAlign: 'center' }}>
        {
          createListArr.map((x, i) =>
            <div key={i}>

              <p style={x.complete ? { textDecoration: "line-through" } : null}>To Do: {x.text}</p>

              <input type="checkbox" onChange={() => {
                handleToggleListItemComplete(i);
              }} checked={x.complete} className="strikeThrough" />
              <button onClick={() => handleRemoveListItem(i)}>Remove</button>
            </div>
          )
        }
      </div>
    </div >
  );//end return
}//end App

export default App;
