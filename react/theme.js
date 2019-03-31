import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const STO_theme = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      label: {
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 400,
          color: "#373737",
      }
    },
    MuiButton: {
      root: {
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 600,
        textTransform: "none",
        color: "#6a6a6a",
        minWidth: '30px',
        lineHeight: '1.25',
      },
    },
    MuiToggleButton: {
      root: {
        color: '#6a6a6a',
        '&$selected': {
          backgroundColor: '#322956',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#5b5377'
          },
        }
      },
      label: {
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 600,
        textTransform: "capitalize",
      },
    },
  }
});

export default STO_theme;