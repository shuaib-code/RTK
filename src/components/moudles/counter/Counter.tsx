import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { decrement, increment } from "@/redux/slices/counter/counterSlice";
import { styles } from "./style";

function Counter() {
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
    <div className=" max-w-4xl text-center">
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

export default Counter;
