import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Main from "./Main";

const drawerWidth = 240;
const navItems = ["Home", "About", "Project", "Testimonials", "Contact"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/about" sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/projects" sx={{ textAlign: "center" }}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/testimonials" sx={{ textAlign: "center" }}>
            <ListItemText primary="Testimonials" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/contact" sx={{ textAlign: "center" }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#222f3e" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Nahom
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/" sx={{ color: "#fff" }}>
              Home
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/about" sx={{ color: "#fff" }}>
              About
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/projects" sx={{ color: "#fff" }}>
              Projects
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/testimonials" sx={{ color: "#fff" }}>
              Testimonials
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/contact" sx={{ color: "#fff" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Main />
      </Box>
    </Box>
  );
}

export default Header;
