import { Box, Card, CardContent, Paper, TextField } from '@mui/material'
import { Container, width } from '@mui/system'
import React from 'react'
import  './landing.css'   


 function Principal(){

    return (
        <>
           <Paper className='paper' >
           <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <Box ml={70}>
                <img src='https://image.jimcdn.com/app/cms/image/transf/dimension=634x10000:format=jpg/path/sdd2b9b442c59d78e/image/i166485a3387446bb/version/1626331627/como-planificar-una-fiesta-infantil.jpg'/>
                </Box>
          
            
           </Card>
           </Paper>
        </>
      )

  }

  export default Principal;