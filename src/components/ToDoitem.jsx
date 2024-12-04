const ToDoitem = ({ ToDoname, ToDodate }) => {
  // let ToDoname = "Buy flowers";
  // let ToDodate = "07/11/2024";
  return (
    <div className="row Kg-row">
      <div className="col-6 ">
        <h3>{ToDoname}</h3>
      </div>
      <div className="col-4 ">{ToDodate}</div>
      <div className="col-2 ">
        <button type="button " className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
};
export default ToDoitem;
