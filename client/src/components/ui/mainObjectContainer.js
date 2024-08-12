import React from "react";
import { Container } from "@mui/material";
import ObjectContainer from "../objectContainer";

function MainObjectContainer() {
  return (
    <Container maxWidth="md">
      <ObjectContainer containerHeading="Inbox" />
    </Container>
  );
}

export default MainObjectContainer;
