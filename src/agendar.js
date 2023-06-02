import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';


const Agendar = () => {
  const [agendar, setAgendar] = useState(false);
  const [agenda, setAgenda] = useState({
    fecha: '',
    horario: '',
    invitados: '',
    servicio: '',
    salon: '',
  });

  useEffect(() => {
    const getAgenda = () => {
      fetch('http://localhost:9000/api/agenda')
        .then((res) => res.json())
        .then((res) => setAgenda(res));
    };
    getAgenda();
  }, []);

  const handleChange = (e) => {
   setAgenda({
    ...agenda,
    [e.target.name]:e.target.value
   })
  };

  const handleAgenda = (e) => {
    e.preventDefault(); // Prevent the form from submitting by default

    if (
      agenda.fecha === '' ||
      agenda.horario === '' ||
      agenda.invitados === '' ||
      agenda.servicio === '' ||
      agenda.salon === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(agenda),
    };

    fetch('http://localhost:9000/api/agenda', requestInit)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAgendar(true); // Set agendar state to true after successful response
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      {agendar ? (
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          ¡Cita agendada correctamente!
        </Typography>
      ) : (
        <>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Agendar Cita
          </Typography>
          <form onSubmit={handleAgenda}>
            <TextField
              label="Cantidad de invitados"
              name="invitados"
              type="number"
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Hora"
              name="horario"
              type="time"
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Fecha"
              name="fecha"
              type="date"
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <FormControl fullWidth required margin="normal">
              <InputLabel id="salon-label">Salón</InputLabel>
              <Select
                name="salon"
                labelId="salon-label"
                onChange={handleChange}
              >
                <MenuItem value="salon1">Salón 1</MenuItem>
                <MenuItem value="salon2">Salón 2</MenuItem>
                <MenuItem value="salon3">Salón 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth required margin="normal">
              <InputLabel id="paquete-label">Paquete</InputLabel>
              <Select
                name="servicio"
                labelId="paquete-label"
                onChange={handleChange}
              >
                <MenuItem value="paquete1">Bronce</MenuItem>
                <MenuItem value="paquete2">Plata</MenuItem>
                <MenuItem value="paquete3">Oro</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Agendar
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default Agendar;


