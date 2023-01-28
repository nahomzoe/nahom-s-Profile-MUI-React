import React from "react";
import About from "./About";
import Title from "./Title";
import Projects from "./Projects";
import Testimony from "./Testimony";
import FormModal from "./FormModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { db } from "../firebase.config";

import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const Home = () => {
  const testimoniesFetchRef = collection(db, "testimonies");
  const [testimonies, setTestimonies] = useState([]);
  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  //   disableHysteresis: true,
  //   threshold: 100,
  // });

  // const handleClick = (event) => {
  //   const anchor = (event.target.ownerDocument || document).querySelector(
  //     "#back-to-top-anchor"
  //   );

  //   if (anchor) {
  //     anchor.scrollIntoView({
  //       block: "center",
  //     });
  //   }
  // };

  //   return (
  //     <Fade in={trigger}>
  //       <Box
  //         onClick={handleClick}
  //         role="presentation"
  //         sx={{ position: 'fixed', bottom: 16, right: 16 }}
  //       >
  //         {children}
  //       </Box>
  //     </Fade>
  //   );
  // }

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
      <About style={{ float: "right" }} />

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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          style={{ margin: "auto" }}
        >
          {testimonies &&
            testimonies.map((testimony) => (
              <Grid item xs={2} sm={4} md={4}>
                <Testimony testimony={testimony} />
              </Grid>
            ))}
        </Grid>
      </Box>
      {/* <Button onClick={trigger}>Hello</Button> */}

      {/* <FormModal /> */}
    </div>
  );
};

export default Home;
