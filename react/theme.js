import { createMuiTheme } from '@material-ui/core/styles';

const STO_theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1d1537',
      dark: '#322956',
    }
  },
  
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
        textTransform: "capitalize",
        color: "#6a6a6a",
      }
    },
    MuiToggleButton: {
      label: {
        fontFamily: "'Nunito Sans', sans-serif",
        fontWeight: 600,
        textTransform: "capitalize",
        color: "#6a6a6a",
      },
    },
  }
});

export default STO_theme;