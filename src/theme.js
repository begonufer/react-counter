import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontFamily: "'Big Shoulders Stencil Display', sans-serif",
      fontWeight: 900,
      fontSize: '24rem',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: '2rem',
        },
      },
    },  
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiButton-root': {
            fontSize: '2.75rem',
            minWidth: '100px',
            minHeight: '80px',
            backgroundColor: '#333',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          minWidth: '200px',
          minHeight: '80px',
          fontWeight: 'bold',
          color: 'white',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
        },
        icon: {
          fontSize: '1.5rem',
          marginRight: '12px',
        },
      },
    },
  },
});
