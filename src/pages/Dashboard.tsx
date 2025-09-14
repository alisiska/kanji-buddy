import { ThemeProvider } from '@emotion/react';
import tealTheme from '../../theme';
import SidebarMenu from '../components/SideBarMenu';
import { CssBaseline, useMediaQuery, useTheme, Box } from '@mui/material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  const handleMenuItemClick = (path) => {
    console.log(path);
    navigate(path);
    handleDrawerClose();
  };

  return (
    <ThemeProvider theme={tealTheme}>
      <CssBaseline />
      <SidebarMenu
        open={open}
        setOpen={setOpen}
        activeItem={location.pathname}
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerClose}
        handleMenuItemClick={handleMenuItemClick}
        isMobile={isMobile}
      >
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Outlet />
        </Box>
      </SidebarMenu>
    </ThemeProvider>
  );
}
