import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './About.css';
import Intro from './Intro/Intro';
import IntroImg from './IntroImg/IntroImg';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Box className={`about-box ${animate ? 'fade-in' : ''}`}>
        <Grid container  className='content-box'
        //  className={`content-box ${animate ? 'fade-in' : ''}`} 
         spacing={2}>
          {/* First Row */}
          <Grid container item xs={12} spacing={2} className="first-row">
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{ textAlign: 'center' }}
              className="intro-content"
            >
              <Intro />
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{
                textAlign: 'center',
                // display: { xs: 'none', md: 'flex' } 
              }}
              className="intro-image"
            >
              <IntroImg />
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Box className="single-row-content" sx={{textAlign:"center"}}>
               <Skills /> 
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default About;
