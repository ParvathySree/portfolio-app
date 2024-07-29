import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './SkillsCard.css'
const SkillsCard = (props) => {


    const {image,name} = props.skillDetail

  return (
    <Box>
        <Paper className="skill-paper">
            <Box className="skill-img-con">
                <img src={image}/>
            </Box>
            <Box className="skill-name-con">
                <Typography className='skill-name'>{name}</Typography>
            </Box>
        </Paper>
    </Box>
  )
}

export default SkillsCard