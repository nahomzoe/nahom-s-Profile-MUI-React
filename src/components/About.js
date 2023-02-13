import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import picNahom from "../Export/edited2.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function About() {
  return (
    <Grid
      container
      spacing={{ xs: 8, md: 6 }}
      columns={{ xs: 2, sm: 10, md: 14 }}
    >
      <Grid item xs sx={{ margin: "auto" }}>
        <Card sx={{ maxWidth: "28.5rem", float: "right" }}>
          {/* <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography> */}
          <CardMedia
            component="img"
            alt="green iguana"
            // height="540"
            src={picNahom}
            sx={{ margin: "auto" }}
          />
          {/* <CardContent>
      
      </CardContent> */}
        </Card>
      </Grid>

      <Grid item xs={8} sx={{ margin: "auto" }}>
        <Typography gutterBottom variant="h5" component="div">
          About
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "auto", maxWidth: "600px" }}
        >
          <RiDoubleQuotesL
            style={{ color: "rgb(188, 137, 42)", maxWidth: "600px" }}
          />
          Junior web developer adept in all stages of advanced web development.
          Knowledgeable in user interface, testing, and debugging processes.
          Bringing forth expertise in design, installation, testing and
          maintenance of web systems. Equipped with a diverse and promising
          skill-set. Trained in an assortment of technologies, including HTML,
          CSS, JavaScript, React,Redux,TypeScript,Node.js, PHP, Symfony,
          Continuous Integration(AWS), Unit Testing, Content Management(Drupal),
          MariaDB, and Microsoft SQL Server. Also Figma,Trello and Docker are in
          the set. Able to effectively self-manage during independent projects,
          as well as collaborate in a team setting.
          <RiDoubleQuotesR style={{ color: "rgb(188, 137, 42)" }} />
          <br />
          <br />
          <Divider />
        </Typography>
      </Grid>
    </Grid>
  );
}
