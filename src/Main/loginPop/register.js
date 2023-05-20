import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,

  } from "@mui/material";
import './login.css'
  
  const RegisterDialog= (props)=> {
    const { handleClose, handleSaveDialog, open } = props;
  
    return (
      <>
        <Dialog open={open}  >
          <DialogTitle  px={6} className="dialog-title">
             Registrate
          </DialogTitle>
          <DialogContent mt={-4}>
            <Box >
        
              <Stack
              spacing={8}
                mt={4}
                direction={{ xs: "row"}}
              >
                <TextField
                  name="Usuario"
                  label="Usuario"
                  rows={4}
                  variant="standard"
    
                />
                 <TextField
                  name="Nombre"
                  label="Nombre"
                  rows={4}
                  variant="standard"
    
                />
                 <TextField
                  name="Apellido"
                  label="Apellido"
                  rows={4}
                  variant="standard"
    
                />
                </Stack>

              <Stack
              spacing={8}
                mt={4}
                direction={{ xs: "row"}}
              >
  
                 <TextField
                  name="Contraseña"
                  label="Contraseña"
                  rows={4}
                  variant="standard"
    
                />
              
            
                 <TextField
                  name="Telefono"
                  label="Telefono"
                  rows={4}
                  variant="standard"
    
                />
                 <TextField
                  name="Edad"
                  label="Edad"
                  rows={4}
                  variant="standard"
    
                />
              </Stack>
            
            </Box>
            <Stack
               spacing={8}
               mt={4}
               >
              <TextField
                  name="Correo"
                  label="correo"
                  variant="standard"
                  maxRows={4}
    
                />
                </Stack>
            <Stack
               spacing={8}
               mt={4}
               >
              <TextField
                  name="Direccion"
                  label="Direccion"
                  multiline
                  maxRows={4}
                  variant="filled"
    
                />
                </Stack>
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveDialog}>Enviar</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  export default RegisterDialog;