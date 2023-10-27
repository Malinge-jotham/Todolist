import Contact from "./components/Contact";
import Heading from "./components/Heading";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App bg-Solitude font-Poppins container py-16 px-6 min-h-screen mx-auto">
      <Heading />
      <ToDoList />
      <Contact />
    </div>
  );
}

export default App;
