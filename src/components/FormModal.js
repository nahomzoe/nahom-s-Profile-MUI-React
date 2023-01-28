import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [basicModal, setBasicModal] = useState(false);
  const [data, setData] = useState({
    testimony: "",
    fullName: "",
    jobTitle: "",
    imageUrl: "",
    linkedinUrl: "",
  });
  const testimoniesFetchRef = collection(db, "testimonies");
  const { testimony, fullName, jobTitle, imageUrl, linkedinUrl } = data;
  const toggleShow = () => setBasicModal(!basicModal);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addDoc(testimoniesFetchRef, data);
    handleClose();
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>What do you say about Nahom</Button> */}
      <Chip
        onClick={handleOpen}
        label="Give your testimony"
        color="primary"
        variant="outlined"
        sx={{ ml: 3, mt: 3 }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              minWidth: "30%",
              borderRadius: "5px",
              border: "#F6F9F3",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              align="center"
              style={{
                Width: "100%",
                height: "3rem",
                background: "#222f3e",
                paddingTop: "0.5rem",
                color: "#fff",
              }}
            >
              Add your testimony
            </Typography>
            <br />
            <form onSubmit={submitHandler}>
              <TextField
                id="outlined-multiline-flexible"
                label="Full Name"
                multiline
                maxRows={4}
                style={{ width: "100%" }}
                name="fullName"
                value={fullName}
                onChange={changeHandler}
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Job Title"
                multiline
                maxRows={4}
                style={{ width: "100%" }}
                name="jobTitle"
                value={jobTitle}
                onChange={changeHandler}
                // onChange={handleChange}
                // defaultValue="Default Value"
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Testimony"
                multiline
                rows={4}
                style={{ width: "100%" }}
                name="testimony"
                value={testimony}
                onChange={changeHandler}
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Picture"
                multiline
                maxRows={4}
                style={{ width: "100%" }}
                name="imageUrl"
                value={imageUrl}
                onChange={changeHandler}
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Linkedin"
                multiline
                maxRows={4}
                style={{ width: "100%" }}
                name="linkedinUrl"
                value={linkedinUrl}
                onChange={changeHandler}
              />
              <br />
              <br />

              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "1rem" }}
                value="Submit"
                onClick={submitHandler}
              >
                Add testimony
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
