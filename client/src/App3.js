// /client/App.js
import React, { Component } from "react";
import axios from "axios";

class App3 extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    name: "",
    group: "",
    owner: "",
    isComplete: false,
    startDate: "",
    endDate: "",
    description: "",
    objectives: ""
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getTask")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  putDataToDB = (name, description, objective, owner, startDate, endDate) => {
    axios
      .post("/api/putTask", {
        name: name,
        description: description,
        objective: objective,
        owner: owner,
        startDate: startDate,
        endDate: endDate
      })
      .then(newTask => {
        this.setState({
          data: [...this.state.data, newTask.data]
        });
      });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteTask", {
      data: {
        id: objIdToDelete
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateTask", {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <>
        <div>
          <ul>
            {data.length <= 0
              ? "NO DB ENTRIES YET"
              : data.map(dat => (
                  <li>
                    Name: {dat.name}
                    Group: {dat.group}
                    Owner: {dat.owner}
                    Start - Date: {dat.startDate}
                    End - Date: {dat.endDate}
                    Description: {dat.description}
                    Objectives: {dat.objectives}
                  </li>
                ))}
          </ul>
        </div>

        <div>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <input
            type="text"
            onChange={e => this.setState({ objectives: e.target.value })}
          />
          <input
            type="text"
            onChange={e => this.setState({ owner: e.target.value })}
          />
          <input
            type="text"
            onChange={e => this.setState({ startDate: e.target.value })}
          />
          <input
            type="text"
            onChange={e => this.setState({ endDate: e.target.value })}
          />
          <button
            onClick={() =>
              this.putDataToDB(
                this.state.name,
                this.state.description,
                this.state.objectives,
                this.state.owner,
                this.state.startDate,
                this.state.endDate
              )
            }
          >
            ADD
          </button>
        </div>
      </>
    );
  }
}

export default App3;
