import './TaskCard.css'

interface TaskProp {
	title: string;
	dueDate: string;
	description: string;
	onDelete: () => void;
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
			<button
				className="deleteTaskButton bg-red-500 hover:bg-red-600 text-white px-3 py-1 mt-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
				onClick={() => { props.onDelete(); }}>
				Delete
			</button>
		</div>
	);
};

export default Task