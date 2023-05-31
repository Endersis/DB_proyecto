import { Box, Button, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

import React, { useState } from 'react'
import  './landing.css'   
const useStyles = makeStyles(theme => ({
   carouselContainer: {
     width: '100%',
     height: '400px',
     position: 'relative',
     overflow: 'hidden',
   },
   imageContainer: {
     display: 'flex',
     transition: 'transform 0.3s ease-in-out',
   },
   image: {
     width: '100%',
     height: '100%',
     objectFit: 'cover',
   },
   prevButton: {
     position: 'absolute',
     top: '50%',
     left: '20px',
     transform: 'translateY(-50%)',
     zIndex: 1,
   },
   nextButton: {
     position: 'absolute',
     top: '50%',
     right: '20px',
     transform: 'translateY(-50%)',
     zIndex: 1,
   },
 }));

 function Principal({images}){

   const classes = useStyles();
   const [currentIndex, setCurrentIndex] = useState(0);
 
   const handlePrevClick = () => {
     setCurrentIndex(prevIndex =>
       prevIndex === 0 ? images.length - 1 : prevIndex - 1
     );
   };
 
   const handleNextClick = () => {
     setCurrentIndex(prevIndex =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
     );
   };
    return (
       
           <div>
            <Typography variant="h4" align="center" gutterBottom>
        BIENVENIDOS
      </Typography>

      <div className={classes.carouselContainer}>
        <Grid
          container
          className={classes.imageContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Grid item xs={12} key={index}>
              <img src={image} alt={`Image ${index + 1}`} className={classes.image} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.prevButton}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.prevButton}
            onClick={handlePrevClick}
          >
            Prev
          </Button>
        </div>
        <div className={classes.nextButton}>
          <Button
              variant="outlined"
              color="primary"
              className={classes.nextButton}
              onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>
           </div>
        
      )

  }

  export default Principal;