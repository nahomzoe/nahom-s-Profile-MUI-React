import React from "react";
import About from "./About";
import Title from "./Title";
import Projects from "./Projects";
import Testimony from "./Testimony";
import Contact from "./Contact";
import FormModal from "./FormModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { db } from "../firebase.config";

import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const Home = () => {
  const testimoniesFetchRef = collection(db, "testimonies");
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    onSnapshot(testimoniesFetchRef, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTestimonies(fetchedData);
    });
  }, []);
  return (
    <div>
      <Title />
      <About />

      <Projects />

      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ textAlign: "start", mb: "2rem" }}
        >
          Testimonials
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {testimonies &&
            testimonies.map((testimony) => (
              <Grid item xs={2} sm={4} md={4}>
                <Testimony testimony={testimony} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Contact sx={{ marginTop: "2rem" }} />
      </Box>
      {/* <Button onClick={trigger}>Hello</Button> */}

      {/* <FormModal /> */}
    </div>
  );
};

export default Home;
