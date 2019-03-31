import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Header from './Header';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'

import { withStyles } from '@material-ui/core/styles';
import ProjectTable from './ProjectTable';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  helloWorld: {
    marginTop: "80px",
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 3,
  },
  nunitoSans: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: "900",
    fontSize: "40pt",
  },
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: 16,
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
  link: {
    fontWeight: '700',
    color: '#20133b',
    textDecoration: 'underline',
  },
  Input: {
    fontSize: '14px',
    color: '#6a6a6a',
  },
  input: {
    height: '42px',
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonSubscribe: {
    backgroundColor: '#322956',
    boxShadow: 'none',
    borderRadius: 0,
    height: '53px',
    color: '#ffffff',
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    }
  },
  buttonHelp: {
    border: '1px solid #ffffff',
    boxShadow: 'none',
    borderRadius: 0,
    height: '42px',
    width: '218px',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      width: '150px'
    }
  },
  projectTable: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 5,
    }
  },
  banner: {
    backgroundImage: "url('/static/core/home/banner.png')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paddingBanner: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 0,
      paddingBottom: theme.spacing.unit * 0,
    }
  },
  investmentGuide: {
    backgroundImage: "url('/static/core/home/investment_guide.png')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  flexDisplay: {
    display: 'flex',
    marginBottom: '15px',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  marginLeft: {
    marginLeft: theme.spacing.unit * 1,
  },
  marginRight: {
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing.unit * 1,
    }
  },
  marginLeftUpMd: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing.unit * 1,
    }
  },
  banner1: {
    color: '#ffffff',
    fontSize: '45px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '33px',
    }
  },
  banner2: {
    color: '#ffffff',
    fontSize: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    }
  },
  investmentGuide1: {
    color: '#d8d8d8',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    }
  },
  investmentGuide2: {
    color: '#feffff',
    fontSize: '28px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px'
    }
  },
  visibleXSOnly: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language ? this.props.language : "English",
      email: '',
      loading_submit: false,

      emailError: false,
      emailErrorMessage: '',
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleLanguageChange(newLanguage) {
    this.setState({language: newLanguage})
  }

  onChange(){
    this.setState({
      email: event.target.value,
      loading_submit: false,
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

  render() {
    const { classes } = this.props;
    const { language, email, emailError, emailErrorMessage } = this.state;
    return (
      <div>
        <Header language={language} handleLanguageChange={this.handleLanguageChange} />
        <main>
          <Grid container justify="center">

            <div className={classNames(classes.banner, classes.commonPadding)}>
              <Grid className={classes.paddingBanner}>
                <div className={classes.flexDisplay}>
                  <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>Shaping The Future of</Typography>
                  <Typography className={classNames(classes.nunitoSansBlack, classes.marginLeftUpMd, classes.banner1)}>Digital Asset Securities</Typography>
                </div>
                <div>
                  <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>We go deep to unlock insight and have the courage to act on security tokens. We bring the right technologies and people together to tokenize digital assets.</Typography>
                </div>
              </Grid>
            </div>

            <Grid item xs={12} container direction="column" justify="flex-start" className={classNames(classes.commonPadding, classes.heightFitContent)}>
              <Grid item xs={12} container direction="column">
                <Typography style={{marginBottom: '12px', color: '1d1537', fontSize: 24,}} className={classNames(classes.nunitoSansBold,)}>Security Tokens List</Typography>
                {language == 'English' &&
                <Typography style={{fontSize: 16, color: '#373737'}} className={classes.nunitoSansRegular}>Check out the latest STO list organized by regulation type.</Typography>
                }{language == 'Korean' &&
                <Typography style={{fontSize: 16, color: '#373737'}} className={classes.spoqaHanSans}>규제별로 정리된 최신 STO 리스트를 한눈에 확인하세요.</Typography>
                }
              </Grid>

              <Grid className={classes.projectTable}>
                  <ProjectTable language={language} />
              </Grid>

              <Grid item xs={12} container justify="center">
                <Typography style={{color: '#373737', fontSize: 16,}} className={classNames(classes.nunitoSansSemiBold)}>Cannot find your project? <a href="https://dasfinance.typeform.com/to/OXx9UJ" className={classes.link}>Get listed</a></Typography>
              </Grid>
            </Grid>


            <div className={classNames(classes.investmentGuide, classes.commonPadding)}>
              <Grid>
                <Typography className={classNames(classes.nunitoSansBold, classes.investmentGuide1)}>GET STARTED</Typography>
                {language == 'English' &&
                <div>
                <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide2)}><br/>Got stuck with issuing or investing security tokens?</Typography>
                <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide2)}>We're here for you.</Typography>
                </div>
                }{language == 'Korean' &&
                <div>
                <Typography className={classNames(classes.spoqaHanSans, classes.investmentGuide2)}><br/>복잡한 STO 절차와 규제, <br className={classes.visibleXSOnly}/>어떻게 시작해야할지 고민 되시나요?</Typography>
                <Typography className={classNames(classes.spoqaHanSans, classes.investmentGuide2)}>DAS.Finance가 도와드리겠습니다.</Typography>
                </div>
                }
                <Grid style={{marginTop: '37px'}} container justify="flex-start">
                  <Button className={classNames(classes.buttonHelp, classes.marginRight)} variant="outlined"
                  href={language=="Korean"? "https://dasfinance.typeform.com/to/v4HNG4": "https://dasfinance.typeform.com/to/Xk7xui"}
                  >For Investors <ArrowRightAlt className={classes.marginLeft}/></Button>
                  <Button className={classes.buttonHelp} variant="outlined"
                  href="https://dasfinance.typeform.com/to/JHADCZ"
                  >For Issuers <ArrowRightAlt className={classes.marginLeft}/></Button>
                </Grid>
              </Grid>
            </div>

            <Grid item xs={12} container direction="column" alignItems="center" className={classNames(classes.commonPadding, classes.widthAuto, classes.heightFitContent)}>
              <Grid style={{marginBottom: '50px'}} item xs={12} container direction="column" alignItems="center">
                <Typography style={{marginBottom: '12px', color: '#373737', fontSize: 16,}} align='center' className={classes.nunitoSansSemiBold}>NEWSLETTER</Typography>
                {language == 'English' &&
                <Typography style={{color: '#1d1537', fontSize: 24,}} align='center' className={classes.nunitoSansBold}>Don't miss the our latest qualified reports and news</Typography>
                }{language == 'Korean' &&
                <Typography style={{color: '#1d1537', fontSize: 24,}} align='center' className={classes.nunitoSansBold}>DAS.Finance에서 제공하는 최신 뉴스와 보고서를 무료로 받아보세요.</Typography>
                }
              </Grid>

              <Grid item xs={12} container direction="row" alignItems="flex-start" className={classes.paddingSubscribe}>
                {/*<iframe src="https://upscri.be/fcccf5-2?as_embed" width="100%" height="300" frameBorder="0" ></iframe>*/}
                <Grid item xs={10} className={classNames(classes.paddingLeft)}>
                  {emailError && (
                    <TextField
                      error
                      id="subscribe-email-error"
                      placeholder="Your Email Address"
                      defaultValue={email}
                      helperText={emailErrorMessage}
                      margin="none"
                      variant="outlined"
                      InputProps={{
                        className: classNames(classes.Input, classes.nunitoSansRegular)
                      }}
                      onChange={this.onChange}
                      fullWidth
                      label="Your Email Address"
                    />
                  )}
                  {!emailError && (
                  <TextField
                    id="subscribe-email"
                    placeholder="Your Email Address"
                    margin="none"
                    variant="outlined"
                    InputProps={{
                      className: classNames(classes.Input, classes.nunitoSansRegular)
                    }}
                    onChange={this.onChange}
                    fullWidth
                    label="Your Email Address"
                  />
                  )}
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained"
                  className={classNames(classes.nunitoSansBold, classes.buttonSubscribe)} fullWidth
                  onClick={this.handleSubscribe}>
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{width: '100%'}} container direction="row" justify="center">

              </Grid>
            </Grid>
          </Grid>
        </main>

        <Footer language={language} />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home);
