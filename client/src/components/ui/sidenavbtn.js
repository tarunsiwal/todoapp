import React from "react";

function sidenavbtn(props) {
  return (
    <button className="btn" name="toggle" onClick={props.dothis}>
      <div className="btn-icon" style={props.title ? null : { margin: 0 }}>
        {props.children}
      </div>
      <div className="btnTitle">{props.title}</div>
    </button>
  );
}

export default sidenavbtn;
