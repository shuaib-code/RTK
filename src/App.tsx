import "./App.css";
import { styles } from "./components/counter/style";
import Task from "./pages/Tasks";

function App() {
  return (
    <div className={styles.container}>
      <Task />
    </div>
  );
}

export default App;
