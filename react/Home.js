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

import {withStyles} from '@material-ui/core/styles';
import ProjectTable from './ProjectTable';
import Subscribe from './Subscribe';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  marginTopXSOnly: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3
    }
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  nunitoSans: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: "900",
    fontSize: 40
  },
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: 18
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400
  },
  nunitoSansSemiBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: 16,
    fontWeight: 600
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24
  },
  nunitoSansBlack: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 900
  },
  commonPadding: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 6,
      paddingBottom: theme.spacing.unit * 6
    }
  },
  widthAuto: {
    width: 'auto'
  },
  heightFitContent: {
    height: 'fit-content'
  },
  link: {
    fontWeight: '700',
    color: '#20133b',
    textDecoration: 'underline'
  },
  buttonSubscribe: {
    backgroundColor: '#322956',
    boxShadow: 'none',
    borderRadius: 0,
    height: '53px',
    color: '#ffffff',
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
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
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5
    }
  },
  banner: {
    backgroundImage: "url('/static/core/home/banner.png')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paddingBanner: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 5
    }
  },
  investmentGuide: {
    backgroundImage: "url('/static/core/home/investment_guide.png')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  flexDisplay: {
    display: 'flex',
    marginBottom: '15px',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  marginLeft: {
    marginLeft: theme.spacing.unit * 1
  },
  marginRight: {
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing.unit * 1
    }
  },
  marginLeftUpMd: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing.unit * 2
    }
  },
  banner1: {
    color: '#ffffff',
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },
  banner15: {
    color: '#ffffff',
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 33
    }
  },
  banner2: {
    color: '#ffffff',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  },
  investmentGuide1: {
    color: '#d8d8d8',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  investmentGuide2: {
    color: '#feffff',
    fontSize: 28,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    }
  },
  visibleXSOnly: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  serviceGrid: {
    maxWidth: '360px',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '600px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '500px'
    },
    marginTop: theme.spacing.unit *5, 
  },
  serviceTitle: {
    height: '160px',
    marginBottom: theme.spacing.unit * 2
  },
  serviceButton: {
    width: '140px',
    height: '40px',
    borderRadius: 25,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    color: '#322956',
    [theme.breakpoints.up('xl')]: {
      width: '180px'
    }
  },
  maxWidth: {
    maxWidth: '1200px'
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {classes, language} = this.props;
    return (<div>
      <Header language={language}/>
      <main>
        <Grid container="container" justify="center" style={{
            backgroundColor: '#fbfbfb'
          }}>

          <div className={classNames(classes.banner, classes.commonPadding)}>
            <Grid container="container">
              <Grid className={classNames(classes.paddingBanner, classes.maxWidth)} sm={8}>
                <div className={classes.flexDisplay}>
                  <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>Harvest actionable insights with Quantitative Analysis</Typography>
                </div>
                <div>
                  <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>CryptoQuant uncovers actionable signals hidden in extensive data with a statistical approach such as NLP and reinforcement learning.</Typography>
                </div>
              </Grid>
            </Grid>
          </div>

          <Grid container="container" justify="center" className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12}>
                <Typography style={{
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>About Us</Typography>
              </Grid>

            </Grid>
          </Grid>

          <Grid container="container" justify="center" style={{
              backgroundColor: '#f6f6f6'
            }} className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12}>
                <Typography style={{
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,classes.gutterBottom)}>Harvesting data with a strategic approach</Typography>
              </Grid>

              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/dasresearch.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 18
                      }} className={classNames(classes.nunitoSansSemiBold,)}>Market Data</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 16
                      }} className={classNames(classes.nunitoSansRegular)}>Offers Trade, Order Books, OHLCV, VWAP data standardized to a common schema across all major crypto exchanges. Data will be offered on an exchange-specific or aggregated basis.</Typography>

                  </Grid>
                </Grid>

                <Button id="home-research" href="/research" variant="outlined" style={{
                    border: '2px solid #322956'
                  }} className={classNames(classes.serviceButton)}>Request Access</Button>

              </Grid>
              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/storadar.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 18
                      }} className={classNames(classes.nunitoSansSemiBold,)}>On-chain Data</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 16
                      }} className={classNames(classes.nunitoSansRegular)}>Analyzes cryptocurrency flows across multiple blockchains, providing actionable insight on the whole cryptocurrency ecosystem. Full historical data aggregated daily for all the top assets.</Typography>

                  </Grid>
                </Grid>

                <Button id="home-storadar" href="/sto_radar" variant='outlined' style={{
                    border: '2px solid #322956'
                  }} className={classNames(classes.serviceButton)}>Request Access</Button>

              </Grid>
              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classes.serviceGrid}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/endtoend.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 18
                      }} className={classNames(classes.nunitoSansSemiBold,)}>Sentiment Data</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 16
                      }} className={classNames(classes.nunitoSansRegular)}>Tracks latest trends of the market and calculates AI-driven sentiment score by processing news, social, github and fundamental data sets. You can also access our curated cryptocurrency contents.</Typography>

                  </Grid>
                </Grid>

                <Button id="home-management" variant='contained' style={{
                    color: '#6a6a6a',
                    backgroundColor: '#ededed'
                  }} className={classNames(classes.serviceButton)} disabled="disabled">Coming Soon</Button>

              </Grid>
            </Grid>
          </Grid>

          <Grid container="container" justify="center" className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" className={classNames(classes.heightFitContent, classes.maxWidth)}>

              <Grid item="item" xs={12} sm={6} container="container" direction="column" className={classNames(classes.gutterBottom)}>
                <Typography style={{
                    marginBottom: '12px',
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Consolidating Data in Real-time</Typography>
                <Typography style={{
                    fontSize: 16,
                    color: '#373737'
                  }} className={classes.nunitoSansRegular}>CryptoQuant reads market data, on-chain network data, sentiment data regardless of content, format, or structure and consolidate them for quantitative analysts.</Typography>
              </Grid>
              <Grid item="item" xs={12} sm={6} container="container" direction="column">
                {/* Image */}
              </Grid>

              <Grid item="item" xs={12} sm={6} container="container" direction="column" className={classNames(classes.gutterBottom)}>
                {/* Image */}
              </Grid>
              <Grid item="item" xs={12} sm={6} container="container" direction="column">
                <Typography style={{
                    marginBottom: '12px',
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Clarifying Crowd Psychology</Typography>
                <Typography style={{
                    fontSize: 16,
                    color: '#373737'
                  }} className={classes.nunitoSansRegular}>CryptoQuant clarifies crypto crowd behavior through Reddit, Twitter, Facebook, Github, and over 100 news sources.</Typography>
              </Grid>

              <Grid item="item" xs={12} sm={6} container="container" direction="column" className={classNames(classes.gutterBottom)}>
                <Typography style={{
                    marginBottom: '12px',
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Signal Detection</Typography>
                <Typography style={{
                    fontSize: 16,
                    color: '#373737'
                  }} className={classes.nunitoSansRegular}>CryptoQuant aggregates and curates trading data, detecting actionable, hidden signals with quantitative analysis such as NLP and reinforcement learning.</Typography>
              </Grid>
              <Grid item="item" xs={12} sm={6} container="container" direction="column">
                {/* Image */}
              </Grid>

            </Grid>
          </Grid>
          <Grid container="container" justify="center" style={{
              backgroundColor: '#f6f6f6'
            }} className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12}>
                <Typography style={{
                    color: '#1d1537',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Meet Our Team</Typography>
              </Grid>

            </Grid>
          </Grid>

          <div className={classNames(classes.investmentGuide, classes.commonPadding)}>
            <Grid container="container" justify="center">
              <Grid item="item" xs={12} className={classes.maxWidth}>
                <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide1)}>Contact Us</Typography>

                <div>

                  <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide2)}>contact us contact us contact us</Typography>
                </div>

                <Grid style={{
                    marginTop: '37px'
                  }} container="container" justify="flex-start">
                  <Button id="home-forinvestors" className={classNames(classes.buttonHelp, classes.marginRight)} variant="outlined" href={""}>For Investors
                    <ArrowRightAlt className={classes.marginLeft}/></Button>

                </Grid>
              </Grid>
            </Grid>
          </div>

          <Grid container="container" justify="center" className={classes.commonPadding}>
            <Grid item="item" xs={12} className={classes.maxWidth}>
              <Subscribe language={'English'}/>
            </Grid>
          </Grid>

        </Grid>
      </main>

      <Footer language={'English'}/>
    </div>);
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Home);
