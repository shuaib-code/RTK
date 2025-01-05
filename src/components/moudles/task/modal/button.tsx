import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { AddTaskModal } from "./AddTask";

export function AddTaskButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <PlusCircle className="mr-2 h-4 w-4" /> Add Task
      </Button>
      <AddTaskModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
