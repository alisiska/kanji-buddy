import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  VideogameAsset as VideogameAsset,
  ExitToApp as LogoutIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  HistoryEdu as BookIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Knowledge Bank', icon: <BookIcon />, path: '/bank' },
  { text: 'Play Mode', icon: <VideogameAsset />, path: '/play' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

export default function SidebarMenu({
  open,
  setOpen,
  activeItem,
  handleDrawerToggle,
  handleDrawerClose,
  handleMenuItemClick,
  isMobile,
  children,
}) {
  const theme = useTheme();
  const logout = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '/login';
  };

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: theme.spacing(0, 1),
          minHeight: '64px',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src='/favicon.ico'
            alt='Logo illustration'
            style={{ width: '32px', marginRight: '8px' }}
          />
          {open && (
            <Typography sx={{ fontWeight: 600 }}>Kanji Buddy</Typography>
          )}
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>

      <Divider />

      {/* Navigation Items */}
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleMenuItemClick(item.path)}
              selected={activeItem === item.path}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: 1,
                mb: 0.5,
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,
                  color: 'inherit',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Logout Button */}
      <List sx={{ p: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.contrastText,
              },
            }}
            onClick={logout}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: 'inherit',
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary='Logout'
              sx={{
                opacity: open ? 1 : 0,
                color: 'inherit',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${open ? drawerWidth : 0}px)` },
          ml: { md: `${open ? drawerWidth : 0}px` },
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              ml: { md: `${open ? 0 : 60}px` },
            }}
          >
            {menuItems.find((item) => item.path === activeItem)?.text ||
              'Dashboard'}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component='nav'
        sx={{ width: { md: open ? drawerWidth : 60 }, flexShrink: { md: 0 } }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant='temporary'
          open={open && isMobile}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer - Always visible but collapsed */}
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: open ? drawerWidth : 60,
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              border: 'none',
              boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${open ? drawerWidth : 60}px)` },
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        {children ? (
          children
        ) : (
          <Box
            sx={{
              p: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant='h5' gutterBottom color='primary'>
              {menuItems.find((item) => item.path === activeItem)?.text ||
                'Dashboard'}{' '}
              Page
            </Typography>
            <Typography paragraph>
              This is the{' '}
              {menuItems
                .find((item) => item.path === activeItem)
                ?.text?.toLowerCase() || 'dashboard'}{' '}
              page content.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
