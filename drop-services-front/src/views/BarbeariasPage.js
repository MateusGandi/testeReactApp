import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline as MuiCssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles";
import Card from "../components/Card.js";
import Ad from "../components/Ad.js";
import Drawer from "../components/drawer.js";
import CardBarbearia from "../components/CardBarbearia.js";

function App() {
  const customStyle = {
    html: {
      fontFamily: "roboto",
      backgroundColor: "#000",
    },
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Set the theme mode to 'dark'
    },
  });

  return (
    <>
    <Drawer></Drawer>
    <Card></Card>
    <CardBarbearia nomeBarbearia='Batata' status={false} localizacao='almeiras'></CardBarbearia>
    </>
  );
}
export default App;
