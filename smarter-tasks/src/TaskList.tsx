import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList = (props: Props) => {
  const handleDelete = (index: number) => {
    props.onDelete(index);
  };
  const list = props.tasks.map((task, idx) => (
    <li key={idx} className="mb-4">
      <Task
        title={task.title}
        dueDate={task.dueDate}
        description={task.description}
        onDelete={() => handleDelete(idx)} />
    </li>
  ));
  return <ul>{list}</ul>
};

export default TaskList;