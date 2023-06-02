import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardImageContainer: {
    position: 'relative',
    height: '0',
    paddingTop: '56.25%', // Proporción 16:9
    backgroundColor: theme.palette.grey[200],
    overflow: 'hidden',
  },
  cardImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const sucursales = [
  {
    nombre: 'Salón de Fiesta 1',
    imagen: 'https://cdn.milenio.com/uploads/media/2020/03/16/fecha-siguen-realizando-apartados-fiestas.jpg',
    descripcion: 'Breve descripción del Salón de Fiesta 1.',
  },
  {
    nombre: 'Salón de Fiesta 2',
    imagen: 'https://img.vivanuncios.com.mx/api/v1/mx-pt10-ads/images/3d/3df961b4-6bc2-4b37-8331-51b450cb028d?rule=s-I72.auto',
    descripcion: 'Breve descripción del Salón de Fiesta 2.',
  },
  {
    nombre: 'Salón de Fiesta 3',
    imagen: 'https://img10.naventcdn.com/avisos/18/00/57/71/65/21/1200x1200/149872218.jpg',
    descripcion: 'Breve descripción del Salón de Fiesta 2.',
  },
];

const Sucursales = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Sucursales de Salones de Fiesta
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {sucursales.map((sucursal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <div className={classes.cardImageContainer}>
                <img
                  className={classes.cardImage}
                  src={sucursal.imagen}
                  alt={sucursal.nombre}
                />
              </div>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6">{sucursal.nombre}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {sucursal.descripcion}
                </Typography>
              </CardContent>
              {/* Agrega más componentes, botones o detalles aquí */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sucursales;
