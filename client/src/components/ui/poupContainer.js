import React, { useState } from "react";

// import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Divider from "@mui/material/Divider";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";

function PoupContainer({ trigger, onClose, onAddTask }) {
  // State for the new task's title and description
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
  const getRandomPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * dummyText.length);
    return dummyText[randomIndex];
  };

  const [placeholderText] = useState(getRandomPlaceholder());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("3");

  const options = [
    {
      value: "3",
      label: "Low",
    },
    {
      value: "2",
      label: "Medium",
    },
    {
      value: "1",
      label: "High",
    },
  ];
  const priorityColors = {
    1: "error",
    2: "warning",
    3: "success",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both fields have a value before adding the task
    if (title.trim() && description.trim()) {
      onAddTask({ title, description, dueDate, priority }); // Pass the new task to the parent
      console.log("Task submitted:", { title, description, dueDate, priority });
      setTitle(""); // Reset the input fields
      setDescription("");
      setDueDate("");
      setPriority("");
    }
    onClose();
  };
  const handleCloseAndClear = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    onClose();
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
              placeholder={placeholderText}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3" // This sets the initial visible height
              required
            />
          </div>
          <Divider />
          <div className="popup-btn">
            <div className="task-dueDate-Priority">
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider> */}
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                name="event-date"
              ></input>
              <select
                className="btn"
                value={priority}
                onChange={(e) => setPriority(e.target.priority)}
              >
                {/* <option value="1">Priority</option> */}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                    <AssistantPhotoRoundedIcon
                      color={priorityColors[priority]}
                    />
                  </option>
                ))}
              </select>
            </div>
            <div className="submit-btn">
              <button className="btn submit" type="submit">
                Add task
              </button>
              <button
                className="btn cancel"
                type="button" // Use type="button" to prevent form submission
                onClick={handleCloseAndClear}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PoupContainer;
