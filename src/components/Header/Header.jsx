import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const location = useLocation(); 
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const isActive = (path) => location.pathname === path;


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
<AppBar position="static" sx={{backgroundColor:'#fff'}} className="header-con">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:'space-between',color:'#000'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'1.5rem'
            }}
          >
            {/* SREEPARVATHY */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',color:'#000' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}
                component ={Link}
                sx={{ color: isActive('/') && '#e74c3b' }}
                to='/'>
                  <Typography >About</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}
                sx={{ color: isActive('/projects') && '#e74c3b' }}
                 component ={Link}
                 to='/projects'>
                  <Typography >Projects</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}
                component ={Link}
                sx={{ color: isActive('/contact') && '#e74c3b' }}
                to='/contact'>
                  <Typography >Contact</Typography>
                </MenuItem>
      
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize : '1rem',
            }}
          >
            {/* SREEPARVATHY */}
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex',gap : '20px', } }}>
        
              <Button
                onClick={handleCloseNavMenu}
                component ={Link}
                to='/'
                sx={{ my: 2, display: 'block',fontWeight:700, textTransform: 'none',color: isActive('/') ? '#e74c3b' : '#000' }}
              >
                About
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                component ={Link}
                to='/projects'
                sx={{ my: 2, display: 'block',fontWeight:700, textTransform: 'none',color: isActive('/projects') ? '#e74c3b' : '#000' }}
              >
                Projects
              </Button>
              <Button
              component ={Link}
              to='/contact'
                onClick={handleCloseNavMenu}
                sx={{ my: 2,  display: 'block',fontWeight:700, textTransform: 'none',color: isActive('/contact') ? '#e74c3b' : '#000'  }}
              >
                Contact
              </Button>
        
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    
    </>
  )
}

export default Header