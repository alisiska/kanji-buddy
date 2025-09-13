import { createTheme } from '@mui/material/styles';

const tealTheme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Primary teal color
      light: '#4fb3bf', // Lighter teal
      dark: '#005354', // Darker teal
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057', // Keep a contrasting color for secondary elements
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White for paper elements
    },
    text: {
      primary: '#333333', // Dark text for contrast
      secondary: '#666666', // Slightly lighter text
    },
    error: {
      main: '#f44336', // Keep red for errors
      light: '#e57373',
      dark: '#d32f2f',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#008080', // Teal app bar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f8f8f8', // Light background for drawer
        },
      },
    },
  },
});

export default tealTheme;
