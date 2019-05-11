import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  nunitoSans: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: "900",
    fontSize: 40,
  },
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: 18,
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  nunitoSansSemiBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: 16,
    fontWeight: 600,
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24,
  },
  nunitoSansBlack: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 900,
  },
  commonPadding: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 6,
      paddingBottom: theme.spacing.unit * 6,
    }
  },
  paddingSubscribe: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  widthAuto: {
    width: 'auto',
  },
  heightFitContent: {
    height: 'fit-content'
  },
  Input: {
    fontSize: 14,
    color: '#6a6a6a',
  },
  input: {
    height: '16px',

  },
  buttonSubscribe: {
    backgroundColor: '#262b3b',
    boxShadow: 'none',
    borderRadius: 0,
    height: '53px',
    color: '#ffffff',
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    }
  },
})


class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading_submit: false,
      emailError: false,
      emailErrorMessage: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  onChange(){
    this.setState({
      email: event.target.value,
      loading_submit: false,
      emailError: false,
      emailErrorMessage: '',
    });
  }

  handleSubscribe(){
    this.setState({
      loading_submit: true,
    });

    $.ajax({
      method: "POST",
      url: "/api/subscribe/",
      data: {
        email: this.state.email,
        language: this.props.language,
      },
    }).done((data) => {
      this.setState({
        emailError: false,
        emailErrorMessage: '',
      });
      alert('Subscribe is Successfully Done!');
    }).fail((error) => {
      const errorMessage= error.responseText.split('"')[3];
      this.setState({
          emailError: true,
          emailErrorMessage: errorMessage
      });
    });
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.handleSubscribe();
    }
  }


  render(){
    const { classes, language } = this.props;
    const { email, emailError, emailErrorMessage } = this.state;
    return (
      <Grid container justify="center">
        <Grid item xs={12} container direction="column" alignItems="center" className={classNames(classes.widthAuto, classes.heightFitContent)}>
          <Grid style={{marginBottom: '50px'}} item xs={12} container direction="column" alignItems="center">
            <Typography style={{marginBottom: '12px', color: '#373737', fontSize: 16,}} align='center' className={classes.nunitoSansSemiBold}>Newsletter</Typography>

            <Typography style={{color: '#1d1537', fontSize: 24,}} align='center' className={classes.nunitoSansSemiBold}>Stay current with unique insights on crypto</Typography>

          </Grid>

          <Grid item xs={12} justify="center" container direction="row" alignItems="flex-start">
            {/*<iframe src="https://upscri.be/fcccf5-2?as_embed" width="100%" height="300" frameBorder="0" ></iframe>*/}
            <Grid item xs={10} sm={6} className={classes.paddingLeft}>
              <TextField
                error = {emailError}
                id="subscribe-email"
                placeholder="Your Email Address"
                helperText={emailErrorMessage}
                margin="none"
                variant="outlined"
                InputProps={{
                  className: classNames(classes.Input, classes.nunitoSansRegular)
                }}
                inputProps={{
                  className: classes.input,
                }}
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                fullWidth
                label="Your Email Address"
                type="email"
              />
            </Grid>
            <Grid item xs={2}>
              <Button id="home-subscribe" variant="contained"
              className={classNames(classes.nunitoSansBold, classes.buttonSubscribe)} fullWidth
              onClick={this.handleSubscribe}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    )


  }


}

Subscribe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Subscribe);
