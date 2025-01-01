import "./App.css";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const styles = {
  container:
    "flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500;",
  title: "text-white text-3xl font-bold mb-6",
  card: "bg-white shadow-lg rounded-lg p-8 text-center",
  count: "text-5xl font-extrabold text-pink-500 to-indigo-500",
  button_container:
    "mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  button:
    "px-6 py-3 font-medium rounded-lg shadow-md transition-all transform focus:outline-none",
  decrement: "bg-red-500 text-white hover:bg-red-600",
  increment: "bg-green-500 text-white hover:bg-green-600",
  incrementBy5: "bg-blue-500 text-white hover:bg-blue-600",
  decrementBy5: "bg-yellow-500 text-white hover:bg-yellow-600",
};

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const actionBtn = [
    {
      label: "Increment",
      action: increment(1),
      style: styles.increment,
    },
    {
      label: "Decrement",
      action: decrement(1),
      style: styles.decrement,
    },
    {
      label: "Increment by 5",
      action: increment(5),
      style: styles.incrementBy5,
    },
    {
      label: "Decrement by 5",
      action: decrement(5),
      style: styles.decrementBy5,
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter with Redux</h1>

      <div className={styles.card}>
        <p className={styles.count}>{count}</p>

        <div className={styles.button_container}>
          {actionBtn?.map(({ label, action, style }, idx) => (
            <Button
              key={idx}
              onClick={() => dispatch(action)}
              className={`${styles.button} ${style}`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
