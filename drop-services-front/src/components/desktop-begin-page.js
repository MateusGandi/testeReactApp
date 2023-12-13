import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img1 from '../images/barber-banner-fx.png'
import cardBarbearia from './cardBarbearia.js'


const customStyle = {
  html:{
    fontFamily: 'Roboto',
  },
  paper: {
    height: '100vh', // Altura total da tela
  },
  mainGrid: {
    background: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'center',
    placeSelf: 'end',
    color: '#BFBFBF',
    margin: 'auto',
    marginBottom: '50px'
  },
  button: {
    width: '90%',
    maxWidth:'300px',
    backgroundColor: '#F4C000',
  },
};

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container component="main" sx={customStyle.paper} >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        component={Paper}
        elevation={6}
        square
        sx={customStyle.mainGrid}
      >
         <Grid container justifyContent={'end'}>
          <Grid item md={12} xs={12} sx={customStyle.bottomContent}>
            <Button variant="contained" color="warning" sx={customStyle.button} style={{fontSize: "20px"}}>
              <b>AGENDAR</b>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}
