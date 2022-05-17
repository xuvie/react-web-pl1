import * as React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Accessible } from "@mui/icons-material";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <Accessible sx={{display:{xs: 'none', md: 'flex'}, mr: 1}}/>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default App;
