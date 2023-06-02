import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const PaquetesPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Paquete Bronce
            </Typography>
            <img
              src="https://previews.123rf.com/images/djvstock/djvstock1712/djvstock171207512/92189186-trofeo-de-bronce-de-dibujos-animados-sobre-ilustraci%C3%B3n-de-vector-de-fondo-blanco.jpg"
              width={"200px"}
            />
            <Typography variant="body1">
                <li>  Duración de la fiesta: 2 horas. </li>
                <li>  Decoración básica con globos y mantelería.  </li>
                <li>     Juegos y actividades sencillas.  </li>
                <li>         Un solo animador. </li>
                <li>   Incluye un pastel pequeño y refrescos.  </li>
            </Typography>

            {}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Paquete Plata
            </Typography>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/897/839/non_2x/cute-funny-silver-trophy-cup-waving-hand-character-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-silver-trophy-cup-character-concept-vector.jpg"
              width={"200px"}
            />
            <Typography variant="body1">
            <li>  Duración de la fiesta: 3 horas. </li>
                <li>  Decoración temática personalizada.  </li>
                <li>   Juegos y actividades divertidas con premios. </li>
                <li>      Dos animadores para animar a los invitados. </li>
                <li>   Incluye un pastel mediano y una mesa de dulces </li>
            </Typography>
            {/* Otros detalles del paquete plata */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Paquete Oro
            </Typography>
            <img
              src="https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170714016/82073935-dise%C3%B1o-del-ejemplo-del-vector-del-car%C3%A1cter-del-kawaii-del-premio-de-la-taza-del-trofeo.jpg"
              width={"200px"}
            />
            <Typography variant="body1">
            <li> Duración de la fiesta: 4 horas. </li>
                <li> Decoración temática personalizada y detallada. </li>
                <li> Amplia variedad de juegos y actividades emocionantes. </li>
                <li> Incluye un pastel grande, mesa de dulces y barra de snacks..</li>
                <li> Incluye un pastel mediano y una mesa de dulces </li>
            </Typography>
            {/* Otros detalles del paquete oro */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaquetesPage;
