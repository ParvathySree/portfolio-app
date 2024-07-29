import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from 'react'
import './TimeLine.css'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const TimeLine = () => {
  return (
    <Box className='time-line-con'>
      <Box className='timeline-title'>
        EXPERIENCE
        </Box>
    <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline-role'>Software Engineer</Typography>
          <i className='timeline-company'>Triassic Solutions Private Limited, Trivandrum</i><br/>
          <i className='timeline-period'>Nov 2023 - present</i>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <Typography className='timeline-role'>Software Engineer Trainee</Typography>
          <i className='timeline-company'>Triassic Solutions Private Limited, Trivandrum</i><br/>
          <i className='timeline-period'>Nov 2022 - Nov 2023</i>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      
    </Box>
  )
}

export default TimeLine