import { ThemeProvider } from '@emotion/react';
import tealTheme from '../../theme';
import SidebarMenu from '../components/SideBarMenu';
import { CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// Import your page components
import KnowledgeBank from './KnowledgeBank';
import { useState } from 'react';
import DashboardPage from './DashboardPage';

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('/dashboard');
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
    setActiveItem(path);
    navigate(path);
    handleDrawerClose();
  };

  // Render the appropriate component based on the current path
  const renderContent = () => {
    switch (location.pathname) {
      case '/bank':
        return <KnowledgeBank />;
      // case '/users':
      //   return <UsersPage />;
      // case '/analytics':
      //   return <AnalyticsPage />;
      // case '/settings':
      //   return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <ThemeProvider theme={tealTheme}>
      <CssBaseline />
      <SidebarMenu
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerClose}
        handleMenuItemClick={handleMenuItemClick}
        isMobile={isMobile}
      >
        {renderContent()}
      </SidebarMenu>
    </ThemeProvider>
  );
}
