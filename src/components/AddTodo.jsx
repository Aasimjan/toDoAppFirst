const AddTodo = () => {
  return (
    <div className="row Kg-row">
      <div className="col-6 themed-grid-col">
        <input type="text" placeholder="todo-text here" />
      </div>
      <div className="col-4 themed-grid-col">
        <input type="date" />
      </div>
      <div className="col-2 themed-grid-col">
        <button type="button " class="btn btn-success kg-button">
          Add
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
