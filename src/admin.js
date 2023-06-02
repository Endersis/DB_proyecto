import { Button } from "@mui/base";
import {
  AppBar,
  Box,
  CssBaseline,
  Fab,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { theme } from "./theme";
import "./admin.css";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

const Admin = () => {
  const [agenda, setAgenda] = useState([]);
  useEffect(() => {
    const getAgenda = () => {
      fetch("http://localhost:9000/api/agenda")
        .then((res) => res.json())
        .then((res) => setAgenda(res))
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    getAgenda();
  }, []);

  const servicios = [
    { id: 1, nombre: "Plata" },
    { id: 2, nombre: "Bronce" },
    { id: 3, nombre: "Oro" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            FROEBEL
          </Typography>
          <Stack spacing={2} direction="row" sx={{ ml: "auto" }}>
            <Link to="/">
              <Button type="submit" color="inherit">
                Regreso
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        maxWidth="lg"
        mx="auto"
        my={4}
        p={2}
        sx={{ minHeight: "calc(100vh - 64px)" }}
      >
        <Typography variant="h5" mb={2}>
          Citas
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Horario</TableCell>
              <TableCell>Invitados</TableCell>
              <TableCell>Servicio</TableCell>
              <TableCell>salon</TableCell>
              <TableCell>Acciones</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {agenda.map((agenda) => (
              <TableRow key={agenda.id}>
                <TableCell>{agenda.id}</TableCell>
                <TableCell>{agenda.fecha}</TableCell>
                <TableCell>{agenda.horario}</TableCell>
                <TableCell>{agenda.invitados}</TableCell>
                <TableCell>{agenda.servicio}</TableCell>
                <TableCell>{agenda.salon}</TableCell>
                <TableCell>
                  <div className="actions-crud">
                    <Fab size="small" color="success" aria-label="Edit">
                      <EditIcon />
                    </Fab>

                    <Fab size="small" color="error" aria-label="Delete">
                      <ClearIcon />
                    </Fab>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h5" mt={4} mb={2}>
          Servicios
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Duracion</TableCell>
              <TableCell>Decoracion</TableCell>
              <TableCell>Actividades</TableCell>
              <TableCell>Animadores</TableCell>
              <TableCell>Comida</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicios.map((servicio) => (
              <TableRow key={servicio.id}>
                <TableCell>{servicio.id}</TableCell>
                <TableCell>{servicio.nombre}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>
                  <div className="actions-crud">
                    <Fab size="small" color="success" aria-label="Edit">
                      <EditIcon />
                    </Fab>

                    <Fab size="small" color="error" aria-label="Delete">
                      <ClearIcon />
                    </Fab>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
};

export default Admin;
