import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from '../images/mock-app.png';
import AD from '../components/Ad.js'
import Stack from '@mui/material/Stack';
import CardBarbearia from './CardBarbearia.js'

const barbearias = [
  {
    nome: 'Barbearia Detroit',
    status: true,
    localizacao: 'Colina Azul - Aparecida de Goiânia',
    logo: 'b0337e008911febdbd22f04051aa1db04.png' 
  },
  {
    nome: 'Larezu Barber',
    status: false,
    localizacao: 'São Paulo - Aparecida de Goiânia',
    logo: 'b0337e008911febdbd22f04051aa1db0.png',
  },
  {
    nome: 'Abeu Barber',
    status: true,
    localizacao: 'São Paulo - Aparecida de Goiânia',
    logo: 'b0337e008911febdbd22f04051aa1db05.png'
  }
];

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
  }
};

export default function ActionAreaCard() {
  return (
    <Stack margin={"10px 0"} spacing={1} alignItems={"center"}>
       <Grid item>
          <Card sx={{ width: 345 }} variant="outlined">
            <CardActionArea style={{padding:'10px',textAlign:'center'}}>
              Escolha a barbearia mais próxima a você
            </CardActionArea>
          </Card>
        </Grid>
      {barbearias.map((barbearia, index) => (
        <CardBarbearia nomeBarbearia={barbearia.nome} status={barbearia.status} localizacao={barbearia.localizacao}></CardBarbearia>
      ))}
      <AD/>
    </Stack>
  );
}
