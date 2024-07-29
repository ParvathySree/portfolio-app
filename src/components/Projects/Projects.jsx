import { Box } from '@mui/system'
import React from 'react'
import './Projects.css'
import { projects } from '../../utils/contants/constants'
import ProjectCard from './ProjectCard/ProjectCard'
const Projects = () => {
  return (
    <Box className="projects-con">
        <Box className="projects-title">
            PROJECTS
        </Box>
        <Box>
            {
             projects.map((project,index)=>
             <ProjectCard projectDetail = {project} key={project.id}/>
             )
            }
        </Box>
    </Box>
  )
}

export default Projects