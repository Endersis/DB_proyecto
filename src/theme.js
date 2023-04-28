import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
     primary: {
       main: '#FF612B',
       dark:'#B2431E',
       light:'#FF8055',
       contrastText:'#FFFFFF',

     },
     secondary: {
       main: '#002677',
       dark: '#001A53',
       light: '#D9F6FA',
       contrastText:'#FFFFFF',
       shades: {
         '4p':  'rgba(0, 0, 0, 0.04)'
       }
     },
     error: {
       main: '#D32F2F',
     },
     background:{
       paper:'#FFFFFF',
       default:'#FAFAFA',

     },
     success:{
       main:'#002677'
     },

   },
   spacing: 4,
 });
