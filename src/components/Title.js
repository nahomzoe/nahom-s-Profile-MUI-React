import * as React from "react";

import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <div>
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: "center", mt: "1rem" }}
      >
        Nahom
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ textAlign: "center", mb: "2rem" }}
      >
        Junior web developer
      </Typography>
    </div>
  );
}
