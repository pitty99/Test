import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import './Navbar.css'

const pages = ['Browser Game', 'Upload Game', 'Community', "Support"];
const settings = ['Sign Up', 'Login'];

const Navbar = () => {

  return (
    <div className='nav-bar-container'>
      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GameJam
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => { }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {settings.map((setting) => (
                <Button
                  key={setting}
                  onClick={() => { }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {setting}
                </Button>

              ))}

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>

  );
};
export default Navbar;
