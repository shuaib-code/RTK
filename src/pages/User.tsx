import { AddUserButton } from "@/components/moudles/user/modal/button";
import UserCard from "@/components/moudles/user/UserCard";
import { useAppSelector } from "@/redux/hook";
import { selectUser } from "@/redux/slices/user/userSlice";

export default function User() {
  const users = useAppSelector(selectUser);
  if (users.length === 0) return <Nothing_UI />;

  return (
    <div className="px-2 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users</h1>

        <AddUserButton />
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-6">
        {users?.map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </div>
    </div>
  );
}

function Nothing_UI() {
  return (
    <div className="px-2 mt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
      </div>
      <div className="grid gap-2">
        <div className="flex flex-col items-center justify-center p-8 border rounded-xl text-center space-y-3  py-16">
          <p className="text-base font-semibold leading-tight">No User found</p>
          <p className="text-sm text-muted-foreground pb-10">
            There are no user to show yet. Start by adding a new user!
          </p>
          <AddUserButton />
        </div>
      </div>
    </div>
  );
}
