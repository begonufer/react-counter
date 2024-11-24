import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Container, Typography, ButtonGroup, Snackbar, Alert } from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "./theme";

library.add(fas);

const MAX_VALUE = 10;
const MIN_VALUE = 0;
const STEPS_GAP = 1;

const App = () => {

  const [counter, setCounter] = useState(0);

  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const increase = () => {
    if (counter < MAX_VALUE) {
      setCounter(counter + STEPS_GAP);
    } else {
      setIsSnackbarVisible(true);
    }
  };

  const decrease = () => {
    if (counter > MIN_VALUE) {
      setCounter(counter - STEPS_GAP);
    }
  };

  const restartCounter = () => {
    setCounter(MIN_VALUE);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarVisible(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1" aria-label="Contador">{counter}</Typography>

        <ButtonGroup
          variant="contained"
          color="grey"
        >
          <Button onClick={decrease} aria-label="Decrementar contador">
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          </Button>
          <Button onClick={increase} aria-label="Incrementar contador">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </Button>
        </ButtonGroup>

        <Button
          variant="contained"
          color="info"
          onClick={restartCounter}
        >
          Reiniciar
        </Button>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSnackbarVisible}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message="Límite alcanzado"
      >
        <Alert
          severity="warning"
          variant="outlined"
        >
          Límite alcanzado
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
