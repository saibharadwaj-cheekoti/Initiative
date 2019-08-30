import React, { useState } from "react";

const Edit = () => {
  const [state, setState] = useState({
    name: " ",
    id: " ",
    group: " ",
    owner: " ",
    isComplete: false,
    startDate: " ",
    endDate: " ",
    description: " ",
    objective: " "
  });

  const handleChange = (property, value) => {
    setState({ ...state, [property]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  const handleClose = e => {
    setState({
      name: " ",
      id: " ",
      group: " ",
      owner: " ",
      isComplete: false,
      startDate: " ",
      endDate: " ",
      description: " ",
      objective: " "
    });
  };
  return (
    <form className="form">
      <header className="head">
        <h1>
          Task-Name:
          <input
            type="text"
            value={state.name}
            onChange={e => handleChange("name", e.target.value)}
          />{" "}
        </h1>
      </header>
      <div className="whole">
        <div className="start-date">
          Start-Date:
          <input
            type="text"
            value={state.startDate}
            onChange={e => handleChange("startDate", e.target.value)}
          />
        </div>
        <div className="end-date">
          End-Date:
          <input
            type="text"
            value={state.endDate}
            onChange={e => handleChange("endDate", e.target.value)}
          />
        </div>
        <div className="desc">
          Description:
          <input
            type="text"
            value={state.description}
            onChange={e => handleChange("description", e.target.value)}
          />
        </div>
        <div className="owner">
          Owner:
          <input
            type="text"
            value={state.owner}
            onChange={e => handleChange("owner", e.target.value)}
          />
        </div>
        {/* <div className="team">
        Team working:
        <input
          type="text"
          value={this.state.users}
          onChange={onChanged}
        />
      </div> */}
        <div className="obj">
          Objectives:
          <input
            type="text"
            value={state.objective}
            onChange={e => handleChange("objective", e.target.value)}
          />
        </div>
        <footer>
          <button onClick={e => handleSubmit(e)}> Save </button>
          <button onClick={e => handleClose(e)}> Cancel </button>
        </footer>
      </div>
    </form>
  );
};

export default Edit;
