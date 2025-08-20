function sidenavbtn(props) {
  return (
    <button className="btn" name="toggle" onClick={props.dothis}>
      <div className="btn-icon" style={props.title ? null : { margin: 0 }}>
        {props.children}
      </div>
      <div className="btnTitle">{props.title}</div>

      {/* <span className={`${isCollapsed ? "" : "mr-3"}`}>{icon}</span>
      <span
        className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
          isCollapsed ? "opacity-0 w-0" : "opacity-100"
        }`}
      >
        {label}
      </span> */}
    </button>
  );
}
export default sidenavbtn;
