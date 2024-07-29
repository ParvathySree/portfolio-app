import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
  const { name, githubUrl, webUrl, img, skills } = props.projectDetail
  return (
    <Box className="project-card-container">
      <Paper className='project-det-con'>
        <Box className="project-name">
          {name}
        </Box>
        <Box className='project-img-con'>
          <img src={img} alt="Project" />
        </Box>
        <Box className='project-skills-con'>{skills}</Box>
        <Box className="button-con">
          {webUrl && <a href={webUrl} className='button project-btn' target="_blank" rel="noopener noreferrer">DEMO</a>}
          {githubUrl && <a href={githubUrl} className='button project-btn' target="_blank" rel="noopener noreferrer">CODE</a>}
        </Box>
      </Paper>
    </Box>
  )
}

export default ProjectCard
