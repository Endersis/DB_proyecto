import { Button } from '@mui/base';
import { AppBar, Box, CssBaseline, Fab, Link, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { Stack } from '@mui/system';
import react from 'react'
import { theme } from './theme';
import './admin.css'
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";


const Admin = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        FROEBEL
                    </Typography>
                    <Stack spacing={2} direction="row" position={'absolute; right: 0; top: 15px;'} >
                        <Link to="/">
                            <Button type="submit" color="inherit">
                                Regreso
                            </Button>
                        </Link>
                    </Stack>




                </Toolbar>
            </AppBar>
            <Box maxWidth="sm" position={'absolute; right: 600px; top: 100px;'} >
                <Table >

                    <TableHead>
                        Citas
                    </TableHead>
                    <TableRow direction={{ xs: "column", sm: "row" }}>
                        <TableCell>
                            <Typography>
                                Nombre
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Fecha
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Horario
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Invitados
                            </Typography>
                        </TableCell>

                        <TableCell>
                            <Typography>
                                servicio
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Acciones
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableBody>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell >
                            <div className='actions-crud'>
                            <Fab
                                size="small"
                                color="success"
                                aria-label="Edit"
                                
                            >
                                <EditIcon />
                            </Fab>

                            <Fab
                                size="small"
                                color="error"
                                aria-label="Delete"

                            >
                                <ClearIcon />
                            </Fab>
                            </div>
                        </TableCell>

                    </TableBody>
                </Table>
            </Box>
        </ThemeProvider>
    );
}

export default Admin;