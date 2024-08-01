import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#35bf31'
    },
    secondary: {
      main: '#72bf31'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;