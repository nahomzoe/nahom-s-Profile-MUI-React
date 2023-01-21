import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ textAlign: "start", mb: "2rem" }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
