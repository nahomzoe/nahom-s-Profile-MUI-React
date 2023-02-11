import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 6000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_5lv975g",
        "template_fa4aafi",
        templateParams,
        "syQYTp1OfrF9qNutv"
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,

        // process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ maxWidth: "20rem", alignItems: "center" }}>
      <Box
        component="form"
        sx={{
          ml: "150%",
        }}
        noValidate
        autoComplete="off"
      >
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <TextField
              label="Name"
              name="name"
              id="outlined-size-small"
              size="small"
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              sx={{
                m: 0.8,
                width: "40ch",
              }}
            />
          </div>
          <div>
            <TextField
              label="Email"
              name="email"
              id="outlined-size-small"
              size="small"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              sx={{
                m: 0.8,
                width: "40ch",
              }}
            />
          </div>
          <div>
            <TextField
              label="Subject"
              name="subject"
              id="outlined-size-small"
              size="small"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please enter a subject",
                },
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              sx={{
                m: 0.8,
                width: "40ch",
              }}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              name="message"
              multiline
              rows={4}
              {...register("message", {
                required: true,
              })}
              sx={{
                m: 0.8,
                width: "40ch",
              }}
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mt: 0.8,
              ml: 3.5,
              width: "40ch",
            }}
            value="Submit"
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Contact;
