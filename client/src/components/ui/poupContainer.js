import React, { useState } from "react";

function PoupContainer({ trigger, onClose, onAddTask }) {
  // State for the new task's title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both fields have a value before adding the task
    if (title.trim() && description.trim()) {
      onAddTask({ title, description }); // Pass the new task to the parent
      setTitle(""); // Reset the input fields
      setDescription("");
      // Close the popup
    }
    onClose();
  };
  const dummyText = [
    "Project Plan: Q3 Report",
    "Team Meeting: Agenda Review",
    "Client Follow-up: Acme Corp",
    "Draft Thesis Abstract",
    "Submit Expense Report",
    "Groceries run",
    "Call Mom",
    "Finish blog post draft",
    "Pick up dry cleaning",
    "Brainstorm new app ideas",
  ];

  // Function to get a random item from the dummyText array
  const getRandomPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * dummyText.length);
    return dummyText[randomIndex];
  };

  return trigger ? (
    <div className="popup-container">
      <div className="popup">
        {/* <h3>Add task</h3> */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="taskTitle">Title</label> */}
            <input
              className="text-area"
              placeholder={getRandomPlaceholder()}
              type="text"
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="taskDescription">Description</label> */}
            <textarea
              className="text-area"
              id="taskDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3" // This sets the initial visible height
              required
            />
          </div>
          <div className="popup-btn">
            <button className="btn submit" type="submit">
              Add task
            </button>
            <button
              className="btn cancel"
              type="button" // Use type="button" to prevent form submission
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PoupContainer;
