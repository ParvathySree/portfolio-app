import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Intro.css'
import resumePdf from "../../../utils/pdf/resume.pdf"

const Intro = () => {


  return (
    <Box>
      <Box className="into-txt-box">
      <Typography className='name text'>Hello<span className='role'>.</span></Typography>
      <Typography className='name text'>I'm Sreeparvathy</Typography>
      <Typography className='role text'>Full Stack Developer</Typography>
      <Box className="intro-btns">
      <a href={resumePdf} className="button" target="_blank" >View Resume</a>
      </Box>
      </Box>
    </Box>
  )
}

export default Intro