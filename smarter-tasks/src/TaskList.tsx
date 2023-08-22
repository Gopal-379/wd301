import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      dueDate={task.dueDate}
      description={task.description}
    />
  ));
  return <>{list}</>
};

// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         dueDate={task.dueDate}
//         description={task.description}
//       />
//     ));
//   }
// }
export default TaskList;