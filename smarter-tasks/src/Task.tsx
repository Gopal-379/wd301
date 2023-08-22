import './TaskCard.css'

interface TaskProp {
	title: string;
	dueDate: string;
	description: string;
}

const Task = (props: TaskProp) => {
	return (
		<div className="TaskItem bg-white shadow-md border border-gray-300 p-6 rounded-lg">
			<h2 className="text-xl font-semibold mb-3">{props.title}</h2>
			<p className="text-sm text-gray-600 mb-2">
				Due Date: <span className="font-medium">{props.dueDate}</span>
			</p>
			<p className="text-sm text-gray-600">
				Description: <span className="font-medium">{props.description}</span>
			</p>
		</div>
	);
};

// class Task extends React.Component<TaskProp> {
// 	render() {
// 		return (
// 			<div className="TaskItem bg-white shadow-md border border-gray-300 p-6 rounded-lg">
// 				<h2 className="text-xl font-semibold mb-3">{this.props.title}</h2>
// 				<p className="text-sm text-gray-600 mb-2">
// 					Due Date: <span className="font-medium">{this.props.dueDate}</span>
// 				</p>
// 				<p className="text-sm text-gray-600">
// 					Description: <span className="font-medium">{this.props.description}</span>
// 				</p>
// 			</div>
// 		);
// 	}
// }

export default Task