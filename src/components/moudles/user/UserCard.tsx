import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/redux/slices/user/types";
import { removeUser } from "@/redux/slices/user/userSlice";
import { Trash } from "lucide-react";

export default function UserCard({ user }: { user: IUser }) {
  const dispatch = useAppDispatch();
  return (
    <Card className="w-[300px] shadow-md">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-lg font-semibold">{user.name}</CardTitle>
        <button
          className="text-red-500 hover:text-red-700 transition"
          aria-label="Delete user"
          onClick={() => dispatch(removeUser(user.id))}
        >
          <Trash className="w-5 h-5 mb-2" />
        </button>
      </CardHeader>
    </Card>
  );
}
