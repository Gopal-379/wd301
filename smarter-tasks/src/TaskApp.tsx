/* eslint-disable @typescript-eslint/no-unused-vars */
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppState {
    tasks: TaskItem[];
}

const TaskApp = () => {
    const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks",{
        tasks: [],
    });

    const addTask = (task: TaskItem) => {
        setTaskAppState({ tasks: [...taskAppState.tasks, task] });
    };

     const handleDeleteTask = (index: number) => {
        const updatedTasks = [...taskAppState.tasks];
        updatedTasks.splice(index, 1);
        setTaskAppState({ tasks: updatedTasks });
    };

    return (
        <div className="bg-gray-300 min-h-screen">
            <div className="container py-10 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Smarter Tasks</h1>
                <h2 className="text-lg text-gray-600 mb-6">
                    <span className="font-semibold">Project: </span>
                    Graduation Final Year Project (Revamp college website)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Pending</h3>
                        <TaskForm addTask={addTask} />
                        <TaskList tasks={taskAppState.tasks} onDelete={(index) => handleDeleteTask(index)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskApp;