"use client";
import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1B27D9",
      light:"#1976d2"
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
  components: {
    MuiInput: {
      defaultProps: {
        margin: "none",
      }
    },
    MuiFormControl: {
      defaultProps: {
        margin: "none",
      },
    },
  },
});

export default theme;
