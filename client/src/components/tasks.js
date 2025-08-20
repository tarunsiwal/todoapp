import React from "react";

function Tasks({ activeView, tasks, isLoading, error }) {
  return (
    <>
      <h3>{tasks.title}</h3>
      <span>{tasks.description}</span>
    </>
  );
}

export default Tasks;
