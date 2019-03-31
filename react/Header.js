import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  header: {
    backgroundColor: '#ffffff',
    minHeight: 74,
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    flexGrow:1
  },
  widthAuto: {
    width: 'auto',
  },
  dasfinance: {
    color: '#1d1537',
    fontFamily: "Ramaraja",
    fontSize: 36,
    fontWeight: 300,
  },
  link: {
    color: '#1d1537',
    fontFamily: "Helvetica",
    fontSize: 14,
    marginLeft: theme.spacing.unit *3
  },
  paddingTop: {
    paddingTop: theme.spacing.unit * 1,
  },
  paddingBottom: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 1,
    }
  },
  formControl: {
    margin: 0,
    padding: 0,
  },
  language: {
    color: '#484848',
    fontFamily: "Helvetica",
    fontSize: 12,
  },
  menuItem: {
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    paddingRight: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 1,
  },
  blueLink: {
    color: "#1d1537",
    textDecorationLine: "none",
  },
  top: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 200,
  },
  maxWidth: {
    maxWidth: '1200px',
  }
});

const languages = [
  {
    value: 'Korean',
    label: 'KOR',
  },
  {
    value: 'English',
    label: 'ENG',
  }
]

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleChange = (e) => {
    document.cookie= ("lang=" + e.target.value + "; path=/");
    location.reload();
  }

  scrollToTop() {
    $("body").animate({scrollTop: 0}, 400);
  }

  render() {
    const { classes } = this.props;

    return (
      
        <AppBar position={"static"}>
          <Grid className={classNames(classes.header, classes.paddingTop)} >
          <Toolbar disableGutters>
          <a href="/home" className={classes.blueLink}><Typography className={classes.dasfinance}>CryptoQuant</Typography></a>
        
        
       
          <Grid container justify="flex-end">           
            <Button id="header-research">
              <Typography className={classes.link} align='center'>Research</Typography>
            </Button>          
            <Button id="header-storadar">
              <Typography className={classes.link} align='center'>STO Radar</Typography>
            </Button>       
            <Button id="header-news">
              <Typography className={classes.link} align='center'>DAS News</Typography>
            </Button>
          </Grid>

        <Fab style={{color: '#e7e7e7'}} aria-label="Top" className={classes.top} onClick={this.scrollToTop} size='small'>
          <KeyboardArrowUp style={{color: '#6A6189'}}/>
        </Fab>
        </Toolbar>
        </Grid>
        </AppBar>
      
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Header);
