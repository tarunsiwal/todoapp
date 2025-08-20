function PoupContainer(props) {
  return props.trigger ? (
    <>
      <div className="popup-container">
        <div className="popup">
          <h3>poupContainer</h3>
          <form>
            <button type="submit">create</button>
            <button type="submit">cancel</button>
          </form>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default PoupContainer;
