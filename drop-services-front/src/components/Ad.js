import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from '../images/ad-example.png'

const customStyle = {
  Spam:{
    backgroundColor: '#F4C000',
    borderRadius: '5px',
    padding: '2px 5px', 
  },
  Images:{
    marginTop: '10px',
    maxWidth: '335px',
  },
  Spacing:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between'
  },
}

export default function ActionAreaCard() {
  return (
    <Card container sx={{ width: 345 }} variant="outlined">
      <CardActionArea sx={12}>
        <Grid container sx={12} padding={"5px"}>
          <Typography
          variant='p5' 
          xs={12}
          md={12}
          style={customStyle.Spacing}
          >
            <spam><b>Lojas integradas</b></spam>
            <spam style={customStyle.Spam}><b>CLIQUE E VEJA MAIS</b></spam>
          </Typography>

          <Typography variant='p5'>
            Seleção dos melhores produtos de empresas parceiras da Drop Services
          </Typography>

          <img
            src={image}
            style={customStyle.Images}
            item
          />
        </Grid>
      </CardActionArea>
    </Card>
  );
}