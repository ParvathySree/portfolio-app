import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './ProjectCard.css'
const ProjectCard = (props) => {

  const {name,githubUrl,webUrl,img} = props.projectDetail
  return (
    <Box>
      <Paper className='project-det-con'>
        <Box className="project-name">
          {name}
        </Box>
        <Box className='project-img-con'>
          <img src={img}></img>
        </Box>
        <Box className="button-con">
          {/* <Button className='button' variant='outlined'> */}
          <a href={webUrl} className='button project-btn' target="_blank" >DEMO</a>
          {/* </Button> */}
          {/* <Button className='button' variant='outlined'> */}
            <a href={githubUrl} className='button  project-btn'  target="_blank" >CODE</a>
          {/* </Button> */}
        </Box>
      </Paper>
    </Box>
  )
}

export default ProjectCard