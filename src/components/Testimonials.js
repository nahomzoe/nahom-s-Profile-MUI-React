import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

import { db } from "../firebase.config";

import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Testimonials() {
  const [expanded, setExpanded] = React.useState(false);

  const testimoniesFetchRef = collection(db, "testimonies");
  const [testimonies, setTestimonies] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    onSnapshot(testimoniesFetchRef, (snapshot) => {
      const singleTestimony = snapshot.docs.find((doc) => doc.id === id);
      setTestimonies({
        id: singleTestimony.id,
        viewing: false,
        ...singleTestimony.data(),
      });

      console.log(snapshot);
    });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardHeader title="David" />
            <Typography
              variant="h6"
              sx={{ textAlign: "start", ml: "1rem", mt: -2 }}
            >
              Back-end developer
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="linkedin">
                <LinkedInIcon sx={{ color: "#5887d0" }} />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>

                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
