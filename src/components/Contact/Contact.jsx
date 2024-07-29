import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { socials } from '../../utils/contants/constants'
import './Contact.css'
const Contact = () => {
    return (
        <Box className="contact-con">
            <Box className="contact-txt-con">
                <Typography className='contact-first'>Speak code fluently? So do I!</Typography>
                <Typography className='contact-sec'> Let's connect .</Typography>
                <Box className="socials-box">
                    {socials?.map((social, index) =>
                        <>
                            <Box className="icon-box" key={social.id}>
                                <a href={social.link} target="_blank" >
                                    <img src={social.icon} alt="social icon" />
                                </a>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
