import React, { useState, useEffect } from "react";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Tasks({ taskList, isLoading, error, onTaskDeleted }) {
  const [items, setItems] = useState([]);
  // Check for loading or error state first to prevent rendering issues.
  if (isLoading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Check if taskList is empty before trying to map over it.
  if (!taskList || taskList.length === 0) {
    return <p>No tasks found.</p>;
  }
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("Item deleted successfully!");
      }
      if (onTaskDeleted) {
        onTaskDeleted();
      }
    } catch (err) {
      console.error("Fetching error:", err);
    }
  };
  return (
    <>
      {taskList.map((task) => {
        const dateObject = new Date(task.dueDate);
        const localizedDate =
          dateObject instanceof Date && !isNaN(dateObject)
            ? new Date(task.dueDate).toLocaleDateString()
            : null;

        return (
          <ul
            key={task._id}
            className="p-4 border border-gray-200 rounded-md bg-gray-50 shadow-sm"
          >
            <div className="tasks-card">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              {localizedDate && (
                <p className="text-sm text-gray-600">
                  <div className="due-date">
                    <InsertInvitationRoundedIcon className="icon" />
                    {localizedDate}
                  </div>
                </p>
              )}
              <div className="task-tools">
                <button className="btn submit">Update</button>
                <button
                  className="btn cancel"
                  onClick={() => handleDelete(task._id)}
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </ul>
        );
      })}
    </>
  );
}

export default Tasks;
