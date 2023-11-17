import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline as MuiCssBaseline } from '@mui/material';
import { dark } from '@mui/material/styles';
import Ad from '../components/Ad.js';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import AD from '../components/Ad.js'
import Products from '../components/Prod.js'


const customStyle = {
    Main: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'initial',
    },
    Images: {
      height: '100px',
      width: '100px',
      margin: '5px',
    },
    List: {
      margin: '5px 0',
      alignItems: 'center',
      marginTop: '-10px',
      marginBottom: '-5px',
    },
    Item: {
      marginTop: '-50px',
    },
    Center:{
        padding: '10px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    Left:{
        textAlign:'left',
        display:'flex',
        flexDirection:'column',
        justifyContent:'left'
    },
    SpaceB: {
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-between'
    }
  };

function paginaPerfil() {
    return(
    <>
    <Stack margin={"10px"} spacing={1} alignItems={"center"}>
       <Grid container>
          <Card sx={{ width: 325 }} style={customStyle.Center} variant="outlined">
                <span>PRÓXIMO A SER ATENDIDO</span>
                <span>12:23</span>
                <Typography variant='h6'>MATEUS HENRIQUE</Typography>
                <Products>

                </Products>
                
                <Button
                    variant="contained"
                    color="warning"
                    style={{ height:'30px', marginTop:'50px'}}
                    >
                        MARCAR COMO CONCLUÍDO
                </Button>
          </Card>
        </Grid>

        <Grid container>
          <Card sx={{ width: 345 }} variant="outlined">
            <CardActionArea style={{padding:'10px',textAlign:'center'}}>
              Escolha o melhor horário
            </CardActionArea>
          </Card>
        </Grid>

        <Grid container>
            <Grid item sx={{ width: 345}}>
                <Card  variant="outlined" style={customStyle.SpaceB}>
                    <div style={customStyle.Left}>
                        <span>12:30</span>
                        <span>13 de Abril de 2024</span>
                    </div>
                    <Button
                    variant="contained"
                    color="success"
                    style={{width:'100px', height:'30px'}}
                    >
                        AGENDAR
                    </Button>
                </Card>
                
                <Card  variant="outlined" style={customStyle.SpaceB}>
                    <div style={customStyle.Left}>
                        <span>12:30</span>
                        <span>13 de Abril de 2024</span>
                    </div>
                    <Button
                    variant="contained"
                    color="success"
                    style={{width:'100px', height:'30px'}}
                    >
                        AGENDAR
                    </Button>
                </Card>
            </Grid>
        </Grid>
       
    </Stack>
    </>
    )
}
export default paginaPerfil;
