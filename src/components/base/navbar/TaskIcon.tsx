import Icon from "@/assets/tasks.png";

const TaskIcon = ({ className }: { className?: string }) => {
  return <img src={Icon} alt="TaskIcon Logo" className={className} />;
};

export default TaskIcon;
