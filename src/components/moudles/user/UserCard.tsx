import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash } from "lucide-react";

export default function UserCard({ user }: { user: string }) {
  return (
    <Card className="w-[300px] shadow-md">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="text-lg font-semibold">{user}</CardTitle>
        <button
          className="text-red-500 hover:text-red-700 transition"
          aria-label="Delete user"
        >
          <Trash className="w-5 h-5 mb-2" />
        </button>
      </CardHeader>
    </Card>
  );
}
