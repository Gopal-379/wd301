import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    id: string;
    title: string;
    dueDate: string;
    description: string;
}

const TaskForm = (props: TaskFormProps) => {
    const [formState, setFormState] = React.useState<TaskFormState>({
        id: Number(new Date()).toString(),
        title: "",
        description: "",
        dueDate: "",
    });

    const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, title: event.target.value });
    };

    const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
    ) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, description: event.target.value });
    };

    const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
    ) => {
        console.log(`${event.target.value}`);
        setFormState({ ...formState, dueDate: event.target.value });
    };

    const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(`Submitted the form with`);
        if (formState.title.length === 0 || formState.dueDate.length === 0) {
            return;
        }
        props.addTask(formState);
        setFormState({ id:String(Number(formState.id) + 1), title: "", description: "", dueDate: "" });
    };

   
    return (
        <form onSubmit={addTask} className="grid gap-4">
            <input type="hidden" id="id" name="id" value={formState.id}/>
            <input
                type="text"
                name="title"
                value={formState.title}
                onChange={titleChanged}
                id="todoTitle"
                className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter task title..."
                required
            />
            <input
                type="date"
                name="dueDate"
                id="todoDueDate"
                value={formState.dueDate}
                onChange={dueDateChanged}
                className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                required
            />
            <input
                type="text"
                name="description"
                id="todoDescription"
                value={formState.description}
                onChange={descriptionChanged}
                className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Todo Description"
            />
            <button
                type="submit"
                id="addTaskButton"
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
            >Add item</button>
        </form>
    );
}

// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//     constructor(props: TaskFormProps) {
//         super(props);
//         this.state = {
//             title: "",
//             dueDate: "",
//             description: "",
//         }
//     }

//     titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value } as Pick<TaskFormState, keyof TaskFormState>);
//     };

//     addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//         event.preventDefault();
//         const newTask = {
//             title: this.state.title,
//             dueDate: this.state.dueDate,
//             description: this.state.description,
//         };
//         this.props.addTask(newTask);
//         this.setState({ title: "", dueDate: "", description: "" });
//     };
//}
 export default TaskForm;