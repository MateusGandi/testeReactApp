import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

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

export default function CardBarbearia(props) {

return(
    <Grid xs={12} sm={6} md={4} spacing={12} style={{display: 'flex', justifyContent: 'center'}} paddingBottom='7px'>
    <Card sx={{ width: 345 }} variant="outlined">
      <CardActionArea style={customStyle.Main}>
        <img
          src={require(`../images/juraides_foto.jpg`)}
          style={customStyle.Images}
          alt={props.nomeBarbearia}
        />
        <Grid container style={customStyle.List}>
          <Grid item xs={12}>
            <Typography variant='h6'>{props.nomeBarbearia}</Typography>
          </Grid>
          <Grid item style={customStyle.Item} xs={12}>
            <Typography variant='p5'>{props.localizacao}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='p6'>
              {props.status ? "Vagas disponíveis agora!" : "Fechado por hoje..."}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  </Grid>
)
}