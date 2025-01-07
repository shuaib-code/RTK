export default function User() {
  //   const tasks = useAppSelector(selectFilter);
  //   const dispatch = useAppDispatch();
  //   if (tasks.length === 0) return <Nothing_UI />;

  return (
    <div className="px-2 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] items-center gap-4 md:gap-6 mb-6">
        <h1 className="text-2xl font-bold">Users</h1>

        <div className="flex justify-center md:hidden">
          {/* <AddTaskButton className="w-full" /> */}
        </div>

        <div className="justify-self-end hidden md:block">
          {/* <AddTaskButton /> */}
        </div>
      </div>

      <div className="grid gap-2">
        {/* {tasks?.map((task, idx) => (
          <TaskCard task={task} key={idx} />
        ))} */}
      </div>
    </div>
  );
}

// function Nothing_UI() {
//   return (
//     <div className="px-2 mt-4">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-bold mb-6">Users</h1>
//       </div>
//       <div className="grid gap-2">
//         <div className="flex flex-col items-center justify-center p-8 border rounded-xl text-center space-y-3  py-16">
//           <p className="text-base font-semibold leading-tight">No task found</p>
//           <p className="text-sm text-muted-foreground pb-10">
//             You don’t have any tasks yet. Start by adding a new task!
//           </p>
//           <AddTaskButton />
//         </div>
//       </div>
//     </div>
//   );
// }
