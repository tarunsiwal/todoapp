import React, { useState, useEffect } from "react";

import { Container } from "@mui/material";

import Sidenav from "../sidenav";
import ObjectContainer from "../objectContainer";
import Tasks from "../tasks";

function MainObjectContainer() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sortTasks = (taskList) => {
    return taskList.sort((a, b) => {
      // Assuming a 'createdAt' timestamp exists on each task object
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };

  // Function to fetch and refresh the task list
  const refreshTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/tasks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { tasks: fetchedTasks } = await response.json();
      // Sort tasks immediately after fetching
      const sortedTasks = sortTasks(fetchedTasks);
      setTasks(sortedTasks);
    } catch (err) {
      setError("Failed to fetch tasks. Please ensure the backend is running.");
      console.error("Fetching error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshTasks(); // Initial fetch when the component mounts
  }, []);

  return (
    <>
      <Sidenav
        user={"tarun"}
        userimg={""}
        className="sidenav"
        onTaskAdded={refreshTasks}
      />
      <Container maxWidth="md">
        <ObjectContainer containerHeading="Inbox">
          <Tasks
            taskList={tasks}
            isLoading={isLoading}
            error={error}
            onTaskDeleted={refreshTasks}
          />
        </ObjectContainer>
      </Container>
    </>
  );
}

export default MainObjectContainer;
