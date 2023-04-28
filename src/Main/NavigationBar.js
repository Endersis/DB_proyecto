import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Box, Menu, MenuItem,  RadioGroup,  Stack,  TextField } from '@mui/material';
import './navigationbar.css'
function NavigationBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
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
          <Typography variant="h6" >
            MyApp
          </Typography>
          <Box  ml={250} >  
          <form onSubmit={handleLoginSubmit}    >
          <Stack spacing={2} direction="row">
            <TextField
              type="email"
              name="email"
              label="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              className='textfield-navigation'
            />
           
        
            <TextField
            
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              label="Password"
              className='textfield-navigation'
            />

            <Button type="submit" color="inherit">
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
