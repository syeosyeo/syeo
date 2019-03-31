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
  }

  handleChange = (e) => {
    this.props.handleLanguageChange(e.target.value);
  }

  render() {
    const { classes, handleLanguageChange } = this.props;

    return (
      <Grid container direction='row' alignItems='center' justify='center' className={classNames(classes.header)}>
        <Grid item xs={12} md={7} container direction='column' justify='center' alignItems='flex-start' className={classNames(classes.widthAuto, classes.paddingTop)}>
        <a href="/home" className={classes.blueLink}><Typography className={classes.dasfinance}>DAS.Finance</Typography></a>
        </Grid>
        <Grid item xs={12} md={5} container direction='row' justify='space-between' alignItems='center' className={classNames(classes.widthAuto)}>
          <Grid item md={4} className={classes.widthAuto} container justify="center">
            <Button href='https://t.me/STOresearch'>
              <Typography className={classes.link} align='center'>STO News</Typography>
            </Button>
          </Grid>
          <Grid item md={4} className={classes.widthAuto} container justify="center">
            <Button href='https://dasfinance.typeform.com/to/OXx9UJ'>
              <Typography className={classes.link} align='center'>Get Listed</Typography>
            </Button>
          </Grid>
          <Grid item md={4} className={classes.widthAuto} container justify='center'>
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
      </Grid>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Header);
