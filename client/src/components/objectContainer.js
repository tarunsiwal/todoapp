import React from "react";

function ObjectContainer(props) {
  return (
    <div className="object-container">
      <header className="object-container-header">
        <div className="headerSpacer"></div>
        <div className="">
          <h1>{props.containerHeading}</h1>
        </div>
      </header>
      <div className="object-container-body">ObjectContainer</div>
    </div>
  );
}

export default ObjectContainer;
