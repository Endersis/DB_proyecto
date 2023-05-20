import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Box,  Menu, MenuItem,  Stack,   } from '@mui/material';
import Login from './loginPop/login';
import RegisterDialog from './loginPop/register';
import './navigationbar.css'
import Conocenos from '../conocenos';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [open, setOpen] = useState(null);

    const [register, setRegister] = useState(null);

   
   
 
    
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };
    
      const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleLoginSubmit = (event) => {
        event.preventDefault();
     
        setLoginData({ email: '', password: '' });
        console.log(loginData);
      };
    
      const HandleLogin = () => {
       
        setOpen(true);
   
      };

      const HandleRegister = () => {
       
        setRegister(true);

      };

   
      

  return (
    <div  >
    <AppBar position="static">
    <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
            anchorEl={anchorEl}
          >
          
            <MenuItem onClick={handleMenuClose} >Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
          
          <Stack direction="row" spacing={8}>       
          
          <Typography variant="h6" >
          FROEBEL
          </Typography> 

          <Button  variant='h6'>
            Inicio
          </Button>
          <Link to = "../conocenos">
          <Button  variant='h6'>
            Conocenos
          </Button>
          </Link>
        
          <Button variant='h6'>
            Sucursales
          </Button>
          <Button variant='h6'>
            Referencias
          </Button>
          </Stack>
          <Login
           handleClose={() => setOpen(false)}
           open={open}/>

          <RegisterDialog
            open = {register}
            handleClose={() => setRegister(false)}
            />

          <Box  ml={50} >  
          <form onSubmit={handleLoginSubmit}    >
          <Stack spacing={2} direction="row" position={'absolute; right: 0; top: 15px;'} >

          <Button onClick={HandleRegister} type="submit" color="inherit">
           Register
            </Button>

            <Button onClick={HandleLogin} type="submit" color="inherit">
              Login
            </Button>
            </Stack>
            
            </form>
          
            </Box>
           
      
        </Toolbar>
    </AppBar>
  </div>
  );
};

export default NavigationBar;
