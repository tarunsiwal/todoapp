import React, { useState, useEffect } from "react";

import { Container } from "@mui/material";
import ObjectContainer from "../objectContainer";
import Tasks from "../tasks";

function MainObjectContainer() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // Fetch data from your backend API
        const response = await fetch("http://localhost:5000/api/tasks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { tasks: fetchedTasks } = await response.json();
        console.log(fetchedTasks);
        setTasks(fetchedTasks); // Set the fetched tasks to state
      } catch (err) {
        setError(
          "Failed to fetch tasks. Please ensure the backend is running."
        );
        console.error("Fetching error:", err);
      } finally {
        setIsLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchTodos();
  }, []);

  return (
    <Container maxWidth="md">
      <ObjectContainer containerHeading="Inbox">
        <Tasks tasks={tasks} isLoading={isLoading} error={error} />
      </ObjectContainer>
    </Container>
  );
}

export default MainObjectContainer;
