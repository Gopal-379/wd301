import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            dueDate: "",
            description: "",
        }
    }

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<TaskFormState, keyof TaskFormState>);
    };

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            dueDate: this.state.dueDate,
            description: this.state.description,
        };
        this.props.addTask(newTask);
        this.setState({ title: "", dueDate: "", description: "" });
    };

    render(){
        return (
            <form onSubmit={this.addTask} className="grid gap-4">
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.titleChanged}
                    id="todoTitle"
                    className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter task title..."
                    required
                />
                <input
                    type="date"
                    name="dueDate"
                    id="todoDueDate"
                    value={this.state.dueDate}
                    onChange={this.titleChanged}
                    className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
                <input
                    type="text"
                    name="description"
                    id="todoDescription"
                    value={this.state.description}
                    onChange={this.titleChanged}
                    className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Todo Description"
                />
                <button
                    type="submit"
                    id="addTaskButton"
                    className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
                >Add item</button>
            </form>
        )
    }
}
 export default TaskForm;