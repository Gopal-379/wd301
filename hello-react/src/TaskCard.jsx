/* eslint-disable react/prop-types */
import './TaskCard.css'

const TaskCard = (props) => {
    const isCompleted = props.completedAtDate !== null;
    return (
        <div className="bg-white rounded-lg p-4 shadow-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
            {isCompleted ? (
                <>
                    <p className="text-gray-500">Completed on: {props.completedAtDate}</p>
                    <p className="text-gray-500">Assignee: {props.assigneeName}</p>
                </>
            ) : (
                <>
                    <p className="text-gray-500">Due on: {props.dueDate}</p>
                    <p className="text-gray-500">Assignee: {props.assigneeName}</p>
                </>
            )}
        </div>
    );
}

export default TaskCard