import AddTask from "./AddTask";
import "./App.css";
import ListTask from "./ListTask";

function App() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        ToDo App with Redux
      </h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
