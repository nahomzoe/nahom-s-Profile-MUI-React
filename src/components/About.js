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
    <Grid container spacing={6}>
      <Grid item xs>
        <Card sx={{ maxWidth: "28.5rem", float: "right", mt: 5.5 }}>
          {/* <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography> */}
          <CardMedia
            component="img"
            alt="green iguana"
            // height="540"
            src={picNahom}
          />
          {/* <CardContent>
      
      </CardContent> */}
        </Card>
      </Grid>

      <Grid item xs={8}>
        <Typography variant="body2" color="text.secondary">
          <Typography gutterBottom variant="h5" component="div">
            About
          </Typography>
          <RiDoubleQuotesL style={{ color: "rgb(188, 137, 42)" }} />
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
        </Typography>
        <br />
        <Divider />
        <br />
        {/* <List>
          <ListItemText>
            {" "}
            . Involved in finding solutions for problems that have been hidden.
          </ListItemText>
          <ListItemText>
            {" "}
            . Worked as a productive and positive team member to design, code,
            test, report, and debug operations.
          </ListItemText>
          <ListItemText>
            {" "}
            . Managed front and back-end in my personal project.
          </ListItemText>
          <ListItemText>
            {" "}
            . Successfully identified, diagnosed, and fixed website problems,
            including broken links, typographical errors, and formatting issues.
          </ListItemText>
          <ListItemText>
            . Evaluated and became knowledgeable in new standards, technologies,
            and trends in website development.
          </ListItemText>
        </List> */}
      </Grid>
    </Grid>
  );
}
