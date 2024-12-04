import ToDoitem from "./ToDoitem";
const ToDoitems = ({ todoitems }) => {
  return (
    <div className="items-Container">
      {/* {todoitems.map((items) => (
        <ToDoitem ToDoname={items.name} ToDodate={items.duedate} />
      ))} */}

      {/* {todoitems.map((items) => (
        <ToDoitem ToDoname={items.name} ToDodate={items.duedate} />
      ))} */}

      <ToDoitem ToDoname="Buy flowers" ToDodate="07/11/2024" />
      <ToDoitem ToDoname="Like this video" ToDodate="right now" />
      <ToDoitem ToDoname="Going to see a garden" ToDodate="07/11/2024" />
    </div>
  );
};
export default ToDoitems;
