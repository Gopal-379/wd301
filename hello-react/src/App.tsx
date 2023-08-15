import React from "react";
import TaskCard from "./TaskCard"


function PendingTasks() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Pending</h1>
		<TaskCard
			title="Build a website with static content"
			dueDate="10th April"
			completedAtDate={null}
			assigneeName="Rohit S"
		/>
		<TaskCard
			title="Add a Blog"
			dueDate="22nd March"
			completedAtDate={null}
			assigneeName="Rohit M"
		/>
    </div>
  );
}

function DoneTasks() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Done</h1>
        <TaskCard
			title="Design a mockup"
			dueDate={null}
			completedAtDate="10th April"
			assigneeName="Rohit M"
		/>
        <TaskCard
			title="Get approval from principal"
			dueDate={null}
			completedAtDate="20th April"
			assigneeName="Ajay S"
		/>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center space-x-8 p-8">
      <PendingTasks />
      <DoneTasks />
    </div>
  );
}


export default App
