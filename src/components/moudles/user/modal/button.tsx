import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { AddUserModal } from "./AddUser";

export function AddUserButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={className}>
        <PlusCircle className="mr-2 h-4 w-4" /> Add User
      </Button>
      <AddUserModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
