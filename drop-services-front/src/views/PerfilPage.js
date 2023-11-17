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
        paddingBottom: '10px',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
  };

function paginaPerfil() {
    return(
    <>
        <Stack margin={"10px 0"} spacing={1} alignItems={"center"}>
       <Grid item>
          <Card sx={{ width: 345 }} variant="outlined">
            <CardActionArea style={{padding:'10px',textAlign:'center'}}>
              Conheça barbearias mais próximas a você
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: 345, paddingBottom:'50px'}} style={customStyle.Center} variant="outlined">
                <CardActionArea style={customStyle.Center}>
                    <div style={{width: '345px',height:'100px',backgroundColor:"#474747"}}>

                    </div>
                    <Avatar src={require("../images/b0337e008911febdbd22f04051aa1db05.png")} style={{width:'100px',height:'100px',marginTop:'-50px'}}></Avatar>
                    <div>Abeu Barber</div>
                    <div>São Paulo - Aparecida de Goiânia</div>
                </CardActionArea>

                <Grid item sx={{ width: 335,margin:'5px'}}  sm={6} md={4}>
                    <Card  variant="outlined" style={{textAlign:'center'}}>
                        <CardActionArea style={{padding:'10px'}}>
                        Agendar com barbeiro de sua preferência
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sx={{ width: 335,margin:'5px'}}  sm={6} md={4}>
                    <Card  variant="outlined" style={{textAlign:'center'}}>
                        <CardActionArea style={{padding:'10px'}}>
                        Loja da Abeu Barber
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sx={{ width: 335,margin:'5px'}}  sm={6} md={4}>
                    <Card  variant="outlined" style={{textAlign:'center'}}>
                        <CardActionArea style={{padding:'10px'}}>
                            Avaliar Local
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sx={{ width: 335,margin:'5px'}}  sm={6} md={4}>
                    <Card  variant="outlined" style={{textAlign:'center'}}>
                        <CardActionArea style={{padding:'10px'}}>
                        Localização
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sx={{ width: 335,margin:'5px'}}  sm={6} md={4}>
                    <Card  variant="outlined" style={{textAlign:'center'}}>
                        <CardActionArea style={{padding:'10px'}}>
                        Voltar
                        </CardActionArea>
                    </Card>
                </Grid>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <AD/>
        </Grid>
       
    </Stack>
    </>
    )
}
export default paginaPerfil;
