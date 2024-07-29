import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Skills from '../Skills/Skills';
import TimeLine from '../TimeLine/TimeLine';
import Timeline from '../TimeLine/TimeLine';
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
      <Box className="about-box">
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

          {/* Second Row - Single Column */}
          <Grid container item xs={12} className="second-row">
            <Grid 
              item 
              xs={12}
              sx={{ textAlign: 'center' }}
              className="new-content"
            >
              <Skills/>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={2} className="first-row">
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{ textAlign: 'center' }}
              className="intro-content"
            >
              <TimeLine/>
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
              {/* <IntroImg /> */}
            </Grid>
          </Grid>


        </Grid>
      </Box>
    </>
  );
};

export default About;
