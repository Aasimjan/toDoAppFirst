import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import ToDoitem1 from "./components/ToDoitem1";
// import ToDoitem2 from "./components/ToDoitem2";
// import ToDoitem from "./components/ToDoitem";
import ToDoitems from "./components/ToDoitems";
function App() {
  const todoitems = [
    {
      name: `Buy flowers`,
      duedate: `07/11/2024`,
    },
    {
      name: `Going to see a garden`,
      duedate: `07/11/2024`,
    },
    {
      name: `Like this video`,
      duedate: `right now`,
    },
  ];

  return (
    <center className="todo-Container">
      <AppName />
      <AddTodo />
      <ToDoitems ToDoitems={todoitems} />
    </center>
  );
}

export default App;
