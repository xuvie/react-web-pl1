import * as React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Adb } from "@mui/icons-material";
import { Container } from "react-bootstrap";

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#ffa709",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

function App() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BeeBetter
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default App;
