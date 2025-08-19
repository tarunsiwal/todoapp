import React from "react";
import { Container } from "@mui/material";
import ObjectContainer from "../objectContainer";

function MainObjectContainer() {
  return (
    <Container maxWidth="md">
      <ObjectContainer containerHeading="Inbox">
        <p>Create new tasks here!</p>
        {/* Other components or elements */}
      </ObjectContainer>
    </Container>
  );
}

export default MainObjectContainer;
