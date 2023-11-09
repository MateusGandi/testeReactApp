import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img1 from '../images/barber-banner.png'
import img2 from '../images/mock-app.png'


const customStyle = {
  html:{
    fontFamily: 'Roboto',
  },
  paper: {
    height: '100vh', // Altura total da tela
  },
  leftGrid: {
    background: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  rightGrid: {
    background: `url(${img2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    margin: '10px',
    fontFamily: 'Russo One',
    color: '#BFBFBF'
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#BFBFBF'
  },
  button: {
    marginTop: '300px',
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
        sm={4}
        md={4}
        sx={customStyle.leftGrid}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        component={Paper}
        elevation={6}
        square
        sx={customStyle.rightGrid}
      >
        <Grid container>
          <Grid item sm={12} md={3} sx={customStyle.leftContent}>
            <Typography variant="h4" component="div" sx={{fontFamily:'Russo One',color:'#F4C000'}}>
              DROP SERVICES
            </Typography>
            <Typography variant="h6" component="div" sx={{fontFamily:'Russo One'}}>
              Agende seu corte e participe de promoções!
            </Typography>
          </Grid>
          <Grid item md={12} sx={customStyle.rightContent}>
            <Button variant="contained" color="warning" sx={customStyle.button}>
              <b>EXPERIMENTE AGORA!</b>
            </Button>
            <a>Disponível em qualquer celular agora!</a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}
