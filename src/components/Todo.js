import React, { useState } from 'react';

const Todo = (props) => {
    const [newListItem, setNewListItem] = useState("");
    const [createListArr, setCreateListArr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCreateListArr([newListItem, ...createListArr]);
        setNewListItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Add New ToDo Item:</label>
                <input autoFocus type="text" onChange={(e) => setNewListItem(e.target.value)}
                    value={newListItem} />
                <input type="submit" name="box"
                    id="addListItem" value="Add" />
            </div>
            <div classname="list">
                {
                    createListArr.map((x, i) =>
                        <div>
                            <p key={i}>{x}</p>
                            <input type="checkbox" />
                        </div>)
                }
            </div>
        </form>
    )
}

export default Todo;