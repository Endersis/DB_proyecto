import  React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const  Conocenos = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            FROEBEL
          </Typography>
          <Stack spacing={2} direction="row" position={'absolute; right: 0; top: 15px;'} >
          <Link to= "/">
          <Button  type="submit" color="inherit">
           Regreso
          </Button>
          </Link>
          </Stack>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             CONOCE NUESTRAS INSTALACIONES
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Contamos con unas bonitas instalaciones, limpias y adecuadas para la familia 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
         
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
           
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image="https://cdn1.yumping.com.mx/emp/fotos/6/1/6/0/1/tm_p-61601-ultima-sin-logo_15562996093661.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Comedor
                    </Typography>
                    <Typography>
                     Este es un espacio limpio. comodo para que tus hijos y familiares puedan disfrutar su compania
                    </Typography>
                  </CardContent>
                  
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image="https://cdn1.yumping.com.mx/emp/fotos/6/2/2/4/6/tm_p-62246-splashfun-diversion-total_15616187446610.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Area de Juegos
                    </Typography>
                    <Typography>
                      Aqui tus invitados pueden disfrutar de la estancia 
                    </Typography>
                  </CardContent>
                  
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image="https://cdn1.yumping.com.mx/emp/fotos/4/7/6/7/tm_e-19754767-splashfun-615819626276148.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Areas limpias y cuidadas
                    </Typography>
                    <Typography>
                      Para que tus familiares esten comodos
                    </Typography>
                  </CardContent>
                  
                </Card>
                
              </Grid>
              
              
          </Grid>
        </Container>
      </main>
 
    </ThemeProvider>
  );
}

export default Conocenos;