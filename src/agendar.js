import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const Agendar = () => {
  const [guestCount, setGuestCount] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [salon, setSalon] = useState('');
  const [paquete, setPaquete] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar el envío de la cita a tu backend o realizar cualquier otra acción
    console.log('Cita agendada:', { guestCount, time, date, salon, paquete });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Agendar Cita
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Cantidad de invitados"
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Hora"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Fecha"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth required margin="normal">
          <InputLabel id="salon-label">Salón</InputLabel>
          <Select
            labelId="salon-label"
            value={salon}
            onChange={(e) => setSalon(e.target.value)}
          >
            <MenuItem value="salon1">Salón 1</MenuItem>
            <MenuItem value="salon2">Salón 2</MenuItem>
            <MenuItem value="salon3">Salón 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth required margin="normal">
          <InputLabel id="paquete-label">Paquete</InputLabel>
          <Select
            labelId="paquete-label"
            value={paquete}
            onChange={(e) => setPaquete(e.target.value)}
          >
            <MenuItem value="paquete1">Paquete 1</MenuItem>
            <MenuItem value="paquete2">Paquete 2</MenuItem>
            <MenuItem value="paquete3">Paquete 3</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained"
        color="primary" fullWidth>
        Agendar
        </Button>
        </form>
        </Container>
        );
        };
        export default Agendar;