import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Task from "./pages/Tasks";

function App() {
  return (
    <div>
      <Task />
      <Toaster />
    </div>
  );
}

export default App;
