import { Box } from '@mui/system'
import React from 'react'
import './Projects.css'
import { projects } from '../../utils/contants/constants'
import ProjectCard from './ProjectCard/ProjectCard'
import { Grid } from '@mui/material'
const Projects = () => {
  return (
    <Grid container 
    justifyContent="center" 
    alignItems="center"
>
  <Grid item xs={12} sm={10} md={10} lg={10}>
      <Box className="projects-con" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',gap:'20px',flexWrap:"wrap" }}>
          {projects.map((project, index) => (
              <ProjectCard projectDetail={project} key={project.id} />
          ))}
      </Box>
  </Grid>
</Grid>
  )
}

export default Projects