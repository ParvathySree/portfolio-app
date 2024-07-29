import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { skillset } from '../../utils/contants/constants'
import "./Skills.css"
import SkillsCard from './SkillsCard/SkillsCard'
const Skills = () => {

  return (
    <Box className="skill-main-box">
        <Box className="skill-box">
            <Typography className='skill-title'>What I use day to day</Typography> 
        </Box>
        <Box className="skill-card-con">
            {
              skillset.map((skill,index)=>
                <SkillsCard key={skill.id} skillDetail={skill}/>
              )
            }
        </Box>
    </Box>
  )
}

export default Skills