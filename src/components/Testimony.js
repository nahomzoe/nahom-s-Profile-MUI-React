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

export default function Testimony({ testimony }) {
  const [expanded, setExpanded] = React.useState(false);

  // const testimoniesFetchRef = collection(db, "testimonies");
  // const [testimonies, setTestimonies] = React.useState([]);
  // let { id } = useParams();

  // useEffect(() => {
  //   onSnapshot(testimoniesFetchRef, (snapshot) => {
  //     const singleTestimony = snapshot.docs.find((doc) => doc.id === id);

  //     setTestimonies({
  //       // id: singleTestimony.id,
  //       viewing: false,
  //       // ...singleTestimony.data(),
  //     });

  //     console.log(snapshot);
  //   });
  // }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 400, pt: 2 }}>
        <CardMedia
          component="img"
          height="194"
          image={testimony.imageUrl}
          alt="Paella dish"
          style={{
            borderRadius: "50%",
            height: "8rem",
            width: "8rem",
            margin: "auto",
          }}
        />
        <CardHeader
          title={testimony.fullName}
          style={{ textAlign: "center" }}
        />
        <Typography variant="h6" sx={{ textAlign: "center", mt: -2 }}>
          {testimony.jobTitle}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {testimony.testimony}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="linkedin" href={testimony.linkedinUrl}>
            <LinkedInIcon sx={{ color: "#5887d0" }} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
