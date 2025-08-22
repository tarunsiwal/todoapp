import React from "react";

function Tasks({ activeView, tasks, isLoading, error }) {
  return (
    <>
      {tasks.map((task) => (
        <ul
          key={task._id}
          className="p-4 border border-gray-200 rounded-md bg-gray-50 shadow-sm"
        >
          <div className="task-card">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">
              Description: {task.description}
            </p>
            <p className="text-sm text-gray-600">
              {/* Due: {task.dueDate.split("T")[0]} */}
            </p>
          </div>
        </ul>
      ))}
    </>
  );
}

export default Tasks;
