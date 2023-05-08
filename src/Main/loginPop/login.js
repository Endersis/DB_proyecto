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
  
  const Login= (props)=> {
    const { handleClose, handleSaveDialog, open } = props;
  
    return (
      <>
        <Dialog open={open} className="dialog" >
          <DialogTitle  px={6} className='dialog-title' >
             Login
          </DialogTitle>
          <DialogContent mt={-4}>
            <Box >
        
              <Stack
              spacing={8}
                mt={4}
                direction={{ xs: "column"}}
              >
                <TextField
                  name="Usuario"
                  label="Usuario"
                  rows={4}
                  variant="standard"
    
                />
  
                 <TextField
                  name="Contraseña"
                  label="Contraseña"
                  rows={4}
                  variant="standard"
    
                />

              </Stack>
            </Box>
  
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveDialog}>Enviar</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  export default Login;
  