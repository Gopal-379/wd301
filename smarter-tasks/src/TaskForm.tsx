import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
        }
    }

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ title: event.target.value });
    };

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
        };
        this.props.addTask(newTask);
        this.setState({ title: "" });
    };

    render(){
        return (
            <form onSubmit={this.addTask}>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.titleChanged}
                    className="flex-grow p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter task title..."
                />
                <button
                    type="submit"
                    className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
                >Add item</button>
            </form>
        )
    }
}
 export default TaskForm;