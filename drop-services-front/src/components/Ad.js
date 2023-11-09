import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from '../images/mock-app.png'

const customStyle = {
  Main:{
    alignItems: 'initial',
    margin: '5px',
  },
  Images:{
    maxWidth: '335px',
  },
  List:{
    alignItems: 'center',
  },
  Item:{
    marginTop: '-50px',
  }
}

export default function ActionAreaCard() {
  return (
    <Card container sm={12} md={12}  sx={{ width: 345 }}  variant="outlined">
      <CardActionArea style={customStyle.Main}>
        <Grid container style={customStyle.List}>
          <Grid item  xs={12} md={12}>
            <Typography
            variant='p6' 
            style={{display:'flex',justifyContent:'space-between'}}
            >
                Lojas integradas
                <span style={{backgroundColor: 'yellow',marginRight: '10px', padding: '2px 5px', borderRadius: '5px'}}>
                    <b>CLIQUE E VEJA MAIS</b>
                </span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='p5'>
                Seleção dos melhores produtos de empresas parceiras da Drop Services
            </Typography>
          </Grid>
        </Grid>


        <img
          src={image}
          style={customStyle.Images}
          item
        />
      </CardActionArea>
    </Card>
  );
}