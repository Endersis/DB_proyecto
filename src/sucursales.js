import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

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
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Sucursales de Salones de Fiesta
      </Typography>
      <Grid container spacing={2} justify="center">
        {sucursales.map((sucursal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" alt={sucursal.nombre} height="200" image={sucursal.imagen} />
              <CardContent>
                <Typography variant="h6">{sucursal.nombre}</Typography>
                <Typography variant="body2" color="textSecondary">{sucursal.descripcion}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sucursales;
