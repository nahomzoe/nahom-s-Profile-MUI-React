import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormModal from "./FormModal";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: 1400,
        mt: 10,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0.7,
          left: 0,
          right: 0,
        }}
        style={{ margin: "auto" }}
      >
        <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        <BottomNavigationAction label="---------" icon={<FormModal />} />
      </BottomNavigation>
    </Box>
  );
}
