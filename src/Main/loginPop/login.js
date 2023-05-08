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

  
  const Login= (props)=> {
    const { handleClose, handleSaveDialog, open } = props;
  
    return (
      <>
        <Dialog open={open} >
          <DialogTitle className="dialog-content" px={6}>
             Login
          </DialogTitle>
          <DialogContent mt={-4}>
            <Box className="box-pop-private">
        
              <Stack
              spacing={8}
             
                direction={{ xs: "column"}}
              >
                <TextField
                  name="Usuario"
                  label="Usuario"
                  rows={4}
                  variant="filled"
    
                />
  
                 <TextField
                  name="Contraseña"
                  label="Contraseña"
                  rows={4}
                  variant="filled"
    
                />
  ¿
              </Stack>
            </Box>
  
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveDialog}>OK</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  export default Login;
  