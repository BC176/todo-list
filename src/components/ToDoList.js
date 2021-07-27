const ToDoList = (props) => {
    const { todoListArray, handleToggleListItemComplete, handleRemoveListItem } = props;
    return (
        <>
            {
                todoListArray.map((item, i) =>
                    <div key={i}>
                        <p style={item.complete ? { textDecoration: "line-through" } : null}>To Do: {item.text}</p>
                        <input type="checkbox" onChange={() => {
                            handleToggleListItemComplete(i);
                        }} checked={item.complete} className="strikeThrough" />
                        <button onClick={() => handleRemoveListItem(i)}>Remove</button>
                    </div>
                )
            }
        </>
    );
}

export default ToDoList;

// todoListArray.map((x, i) =>
//     <div key={i}>
//         <p style={x.complete ? { textDecoration: "line-through" } : null}>To Do: {x.text}</p>
//         <input type="checkbox" onChange={() => {
//             handleToggleListItemComplete(i);
//         }} checked={x.complete} className="strikeThrough" />
//         <button onClick={() => handleRemoveListItem(i)}>Remove</button>
//     </div>