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
import cookIt from "../Export/cookIt.png";
import country from "../Export/country.png";
import con from "../Export/con.png";

import misa from "../Export/misa.png";

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
        spacing={{ xs: 1, md: 6 }}
        columns={{ xs: 2, sm: 8, md: 16 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="recipe"
              style={{ height: "100%", width: "100%" }}
              height="140"
              image={cookIt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CookIt/Recipe app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/nahomzoe/CookIT_Recipe_App-React-Firebase"
              >
                Github
              </Button>
              <Button size="small" href="https://cook-it-app-v2.vercel.app/">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="kitchen"
              height="140"
              style={{ height: "100%", width: "100%" }}
              image={misa}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Daily Kitchen/Managment app
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
              style={{ height: "100%", width: "100%" }}
              height="140"
              image={country}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Countries and Weather app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://github.com/nahomzoe/countriesApi-weatherAPI-redux-RTK"
              >
                Github
              </Button>
              <Button
                size="small"
                href="https://unique-faloodeh-ce5a33.netlify.app"
              >
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              style={{ height: "100%", width: "100%" }}
              height="140"
              image={con}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Countries and Weather app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/nahomzoe/countries">
                Github
              </Button>
              <Button
                size="small"
                href="https://tranquil-syrniki-c703bd.netlify.app/"
              >
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
