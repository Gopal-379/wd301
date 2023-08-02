import TaskCard from "./TaskCard"

function App() {

	return (
		<div>
			<div>
				<h1>Pending</h1>
				<TaskCard title="Build a website with static content"/>
				<TaskCard title="Add a Blog"/>
			</div>
			<div>
				<h1>Done</h1>
				<TaskCard title="Design a Mockup"/>
				<TaskCard title="Get approval from principal"/>
			</div>
		</div>
	);
}

export default App
