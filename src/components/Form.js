const Form = (props) => {
    const { newListItem, setNewListItem, handleSubmit } = props;

    return (
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)} >
            <label>Add New ToDo Item:</label>
            <input
                autoFocus
                type="text"
                name="newListItem"
                onChange={(e) => setNewListItem(e.target.value)}
                value={newListItem} />
            <button>Add ToDo</button>
        </form >
    )
}

export default Form;