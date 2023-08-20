import React from "react";
import './TaskCard.css'

interface TaskProp {
  title: string;
}

class Task extends React.Component<TaskProp> {
	render() {
		return (
			<div className="TaskItem bg-white shadow-md border border-gray-300 p-6 rounded-lg">
				<h2 className="text-xl font-semibold mb-3">{this.props.title}</h2>
				<p className="text-sm text-gray-600 mb-2">
					Due Date:
				</p>
				<p className="text-sm text-gray-600">
					Description:
				</p>
			</div>
		);
	}
}

export default Task