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
    minHeight: 60,
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    flexGrow:1
  },
  headerDocs: {
    backgroundColor: '#ffffff',
    minHeight: 60,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 20,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
    flexGrow:1
  },
  subLogo: {
    width: '110px',
    height: '20px',
    paddingLeft: 16,
    paddingTop: 3,
    position: "absolute",
    fontSize: 14.5,
    fontFamily: "DM Sans",
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  appBar:{
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  widthAuto: {
    width: 'auto',
  },
  dasfinance: {
    color: '#1d1537',
    fontFamily: "DM Serif Display",
    fontSize: 30,
    fontWeight: 400,
    marginBottom: theme.spacing.unit*0.5
  },
  link: {
    color: '#1d1537',
    fontFamily: "Helvetica",
    fontSize: 14,
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
    width: 400,
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
  },
  upbutton_none: {
    display: "none"
  },
  upbutton_exist: {
    display: "inline-flex"
  },
  serviceButton: {
    width: '140px',
    height: '35px',
    borderRadius: 8,
    color: '#322956',
  },
  textButton: {
    marginLeft:20,
    [theme.breakpoints.down('xs')]: {
      display:"none"
    }
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
        <AppBar id="appbar" className={classes.appBar}>
          <Grid className={this.props.indocs ? classes.headerDocs : classes.header} >
          <Toolbar disableGutters>
          <a href="/home" className={classes.blueLink}><Typography className={classes.dasfinance}>CryptoQuant <span style={{
          }} className={this.props.indocs ? classes.subLogo : classes.upbutton_none}>DataPack ™</span></Typography></a>
          <Grid container justify="flex-end">
            <Button id="home-storadar" href="https://calendly.com/ki--5/30min" variant='outlined' style={{
                border: '2px solid #322956'
              }} className={classNames(classes.serviceButton)}>Schedule a Call</Button>
            <Button href={"mailto:contact@cryptoquant.com"} className={classes.textButton}>
              <Typography align='center'  className={classes.link} >Contact</Typography>
            </Button>
          </Grid>
        <div className={this.props.indocs ? classes.upbutton_none : classes.upbutton_exist}>
        <Fab style={{color: '#e7e7e7'}} aria-label="Top" className={classes.top} onClick={this.scrollToTop} size='small'>
          <KeyboardArrowUp style={{color: '#6A6189'}}/>
        </Fab>
        </div>
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
