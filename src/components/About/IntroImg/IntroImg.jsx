import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import IntroImage from "../../../utils/images/intro-img.svg"
import './IntroImg.css'
const IntroImg = () => {
  return (
     <Box>
      <Grid container className='intro-image-con'>
        <Grid item xs={10}>
          <img src={IntroImage} alt="Introduction" className="responsive-image" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default IntroImg