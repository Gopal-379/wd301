import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate: string | null;
  completedAtDate: string | null;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-500">
        {props.completedAtDate
          ? `Completed on: ${props.completedAtDate}`
          : `Due on: ${props.dueDate}`}
      </p>
      <p className="text-gray-500">Assignee: {props.assigneeName}</p>
    </div>
  );
}

export default TaskCard
