import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'

const styles = theme => ({
  header: {
    backgroundColor: '#ffffff',
    minHeight: 92,
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    }
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
      <Grid container direction='row' alignItems='center' justify='center' className={classNames(classes.header)}>
        <Grid container justify="center" className={classes.maxWidth}>
        <Grid item xs={12} md={6} container direction='column' justify='center' alignItems='flex-start' className={classNames(classes.widthAuto, classes.paddingTop)}>
        <a href="/home" className={classes.blueLink}><Typography className={classes.dasfinance}>DAS.Finance</Typography></a>
        </Grid>
        <Grid item xs={12} md={6} container direction='row' justify='space-between' alignItems='center' className={classNames(classes.widthAuto)}>
          {/* <Grid item md={3} className={classes.widthAuto} container justify="center">
            <Button href='/tech'>
              <Typography className={classes.link} align='center'>Tech</Typography>
            </Button>
          </Grid> */}
          <Grid item md={3} className={classes.widthAuto} container justify="center">
            <Button id="header-research" href='/research'>
              <Typography className={classes.link} align='center'>Research</Typography>
            </Button>
          </Grid>
          <Grid item md={3} className={classes.widthAuto} container justify="center">
            <Button id="header-storadar" href='/sto_radar'>
              <Typography className={classes.link} align='center'>STO Radar</Typography>
            </Button>
          </Grid>
          <Grid item md={3} className={classes.widthAuto} container justify="center">
            <Button id="header-news" href='https://t.me/STOresearch'>
              <Typography className={classes.link} align='center'>DAS News</Typography>
            </Button>
          </Grid>
          <Grid item md={3} className={classes.widthAuto} container justify='center'>
            <FormControl className={classes.formControl} style={{disableUnderline: true}}>
              <Select
                value={this.props.language}
                onChange={this.handleChange}
                displayEmpty
                name="language"
                className={classNames(classes.language)}
                disableUnderline
              >
                {languages.map(option => (
                  <MenuItem key={option.value} value={option.value} className={classNames(classes.language, classes.menuItem)}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Fab style={{color: '#e7e7e7'}} aria-label="Top" className={classes.top} onClick={this.scrollToTop} size='small'>
          <KeyboardArrowUp style={{color: '#6A6189'}}/>
        </Fab>
        </Grid>
      </Grid>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Header);
