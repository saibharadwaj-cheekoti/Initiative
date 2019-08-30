import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Menu.css";
import SimpleCard from "./App2.js";
import axios from "axios";

export default function ResponsiveDialog(props) {
  const [id, setId] = React.useState(0);
  const [idToDelete, setIdToDelete] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [select, defSelect] = React.useState([props.select]);
  const [comp, setComp] = React.useState(false);

  function handling() {
    return <SimpleCard select={select} />;
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleCloses() {
    setOpen(false);
    defSelect(true);
    console.log("Working" + select);
    return handling();
  }

  function handleClickDone() {
    setComp(true);
  }

  function deleteFromDB(idToDelete) {
    console.log(idToDelete);
    parseInt(idToDelete);
    let objIdToDelete = null;
    props.da.forEach(dat => {
      if (dat.id === idToDelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>More</Button>
      <Button onClick={() => this.deleteFromDB(props.da.idToDelete)}>
        DELETE
      </Button>
      <Button onClick={handleClickDone}>Done</Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="dialog">
          <DialogTitle id="responsive-dialog-title">
            {props.da.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>Group: {props.da.group} </div>
              <div>Owner: {props.da.owner} </div>
              <div>Start - Date: {props.da.startDate} </div>
              <div>End - Date: {props.da.endDate} </div>
              <div>Description: {props.da.description} </div>
              <div>Objectives: {props.da.objectives} </div>
              <div>id: {props.da.id} </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="utton">
            <Button onClick={handleCloses} color="primary">
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
