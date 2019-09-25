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
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import './BannerAni.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  marginTopXSOnly: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3
    }
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 3
  },
  gutterBottomDouble: {
    marginBottom: theme.spacing.unit * 6
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
    fontWeight: 400,
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
    backgroundColor: '#262b3b',
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
      marginBottom: theme.spacing.uwnit * 5
    }
  },
  banner: {
    // backgroundImage: "linear-gradient(235deg, #382969 0%, #140f25 50%)",
        backgroundImage: "url('/static/core/home/banner2.png')",
        width: "100%",
        height: 580,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom right"
  },
  paddingBanner: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 10,
      paddingBottom: theme.spacing.unit * 2
    }
  },
  whitetext: {
    paddingTop: 10,
    paddingLeft: 10,
    color: "white",
    fontFamily: "'Nunito Sans'",
    height:100,
    fontWeight: 900
  },
  oneByOne: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    overflow: "hidden",
    '&::after': {
      display: "block",
      content: "",
      paddingTop: "100%"
    }
  },
  memberAvatar: {
    backgroundColor: "transparent",
    marginBottom: "5px",
    position: "relative",
    margin: 0,
    padding: 7,
    boxSizing: "border-box"
  },
  memberInfo: {
    marginTop: 100,
    fontWeight: 300,
    width: "100%",
    textAlign: "left",
    padding: 15,
    background: "linear-gradient(to bottom,transparent 0,#1d1537 100%)"
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
      fontSize: 40
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "10%"
    }
  },
  banner2: {
    color: '#ffffff',
    maxWidth:650,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "10%"
    }
  },
  bannerBtn: {
    [theme.breakpoints.up('lg')]: {
      marginLeft: "10%"
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
    marginTop: theme.spacing.unit * 5,
    display: 'block'
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
    color: '#262b3b',
    [theme.breakpoints.up('xl')]: {
      width: '180px'
    }
  },
  maxWidth: {
    maxWidth: '1200px'
  },
  iconButton: {
    paddingLeft:"85%",
    marginBottom:"-30px",
    marginTop:"-30px",
  },
  networkimg: {
    width: "93%"
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
      const script = document.createElement("script");

      script.src = "/static/core/js/banner_ani.js";
      script.async = true;

      document.body.appendChild(script);
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
              <Grid className={classNames(classes.paddingBanner, classes.maxWidth)} md={8}>
                <div className={classes.flexDisplay}>
                  <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>On-chain Data Done Right.</Typography>
                </div>
                <div>
                  <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>We utilize machine learning to provide comprehensive on-chain data and analytics to institutional investors.</Typography>
                  <Grid style={{
                      marginTop: '37px'
                    }} container="container" justify="flex-start">
                    <Button id="home-forinvestors" className={classNames(classes.buttonHelp, classes.bannerBtn)} variant="outlined" href={"https://cryptoquant.typeform.com/to/gvafWJ"}>Product Demo
                      <ArrowRightAlt className={classes.marginLeft}/></Button>
                    <Button id="home-forinvestors" className={classNames(classes.buttonHelp, classes.bannerBtn)} variant="outlined" href={"https://calendly.com/ki--5/30min"}>Schedule a Call
                      <ArrowRightAlt className={classes.marginLeft}/></Button>

                  </Grid>
                </div>
                {/* Banner icon changes */}
              </Grid>
              <Grid className={classNames(classes.paddingBanner, classes.maxWidth)} md={4}>
                <canvas id="c" />
                  <span id="main-ani">
                    <div>
                      <div class="ani-wrapper">
                        <div id="ani-container">
                          <div id="box_top"><a href="" id="box_top_text" target='_blank'></a></div>
                          <div id="box_front"><a href="" id="box_front_text" target='_blank'></a></div>
                          <div id="box_bottom"><a href="" id="box_bottom_text" target='_blank'></a></div>
                        </div>
                      </div>
                    </div>
                  </span>
                </Grid>
            </Grid>
          </div>

          <Grid container="container" justify="center" style={{
              backgroundColor: '#f6f6f6'
            }} className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12}>
                <Typography style={{
                    color: '#262b3b',
                    fontSize: 20,
                  }} className={classNames(classes.nunitoSansSemiBold, classes.gutterBottom)}>WHAT WE DO</Typography>
              </Grid>

              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/dasresearch.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 20,
                        paddingTop:20,
                      }} className={classNames(classes.nunitoSansSemiBold,)}>Entity Metrics</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 14
                      }} className={classNames(classes.nunitoSansRegular)}>We deliver on-chain data metrics that focuses on unique categories of addresses via API, or directly into Python, R, Excel and many other tools. </Typography>

                  </Grid>
                </Grid>
                <Button id="home-research" href="https://calendly.com/ki--5/30min" variant="outlined" style={{
                    border: '2px solid #262b3b'
                  }} className={classNames(classes.serviceButton)}>Schedule a Call</Button>
              </Grid>
              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/storadar.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 20,
                        paddingTop:20,
                      }} className={classNames(classes.nunitoSansSemiBold,)}>Deanonymization</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 14,
                      }} className={classNames(classes.nunitoSansRegular)}>We bring undiscovered data by deanonymizing addresses and analyzing cryptocurrency flows, providing actionable insight on the whole cryptocurrency ecosystem. </Typography>

                  </Grid>
                </Grid>

                <Button id="home-storadar" href="mailto:contact@cryptoquant.com" variant='outlined' style={{
                    border: '2px solid #262b3b'
                  }} className={classNames(classes.serviceButton)}>Request Demo</Button>
              </Grid>
              <Grid item="item" xs={12} sm={3} container="container" direction="column" justify="space-between" className={classes.serviceGrid}>
                <Grid item="item" xs={12} container="container" direction="column" justify="flex-start">
                  <Grid item="item" xs={12} container="container" direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                    <img src="/static/core/home/endtoend.svg"/>

                    <Typography style={{
                        color: '#373737',
                        fontSize: 20,
                        paddingTop:20,
                      }} className={classNames(classes.nunitoSansSemiBold,)}>On-chain Reports</Typography>

                  </Grid>
                  <Grid item="item" xs={12} className={classes.serviceDetail}>

                    <Typography style={{
                        color: '#484848',
                        fontSize: 14
                      }} className={classNames(classes.nunitoSansRegular)}>Based upon our data, we conduct research in order to better understand how on-chain data can be used to understand the cryptocurrency market.</Typography>

                  </Grid>
                </Grid>

                <Button id="home-research" href="/static/core/home/reports/CryptoQuant_Onchain_Exclusive_Vol.25.pdf" variant="outlined" style={{
                    border: '2px solid #262b3b'
                  }} className={classNames(classes.serviceButton)}>Sample Report</Button>

              </Grid>
            </Grid>
          </Grid>

          <Grid id="about" container="container" justify="center" className={classNames(classes.commonPadding)}><a name="about"></a>
            <Grid item="item" xs={12} container="container" className={classNames(classes.heightFitContent, classes.maxWidth, classes.gutterBottomDouble)}>
              <Hidden mdDown>
              <Grid item="item" md={7} hidden-md container="container" direction="column">
                <img src="/static/core/home/dashboard.png" className={classNames(classes.networkimg)}/>
              </Grid>
            </Hidden>
              <Grid item="item" xs={12} lg={5}  container="container" direction="column" className={classNames(classes.gutterBottom)}>
                <Typography style={{
                    marginTop: '100px',
                    marginBottom: '15px',
                    color: '#262b3b',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Client-oriented Data</Typography>
                <Typography style={{
                    fontSize: 16,
                    color: '#373737'
                  }} className={classNames(classes.nunitoSansRegular,classes.gutterBottomDouble)}>Different companies need different data. Identify the data you're interested in and we will tailor it to your needs.</Typography>
              </Grid>
              <Hidden mdUp>
                <Grid item="item" md={7} hidden-md container="container" direction="column">
                  <img src="/static/core/home/dashboard.png" className={classNames(classes.networkimg)}/>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item="item" xs={12} container="container" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12} lg={5}  container="container" direction="column" className={classNames(classes.gutterBottom)}>
                <Typography style={{
                  marginTop: '100px',
                  marginBottom: '15px',
                  color: '#262b3b',
                    fontSize: 24
                  }} className={classNames(classes.nunitoSansSemiBold,)}>Unlock the Value of On-chain Data</Typography>
                <Typography style={{
                    fontSize: 16,
                    color: '#373737'
                  }} className={classNames(classes.nunitoSansRegular,classes.gutterBottomDouble)}>Every transaction must have a purpose. CryptoQuant focuses on deanonymization to uncover each transaction's function. Machine Learning technology enables us to identify who holds the wallet and why they evoke transactions. </Typography>
              </Grid>
              <Grid item="item" lg={7} hidden-md container="container" direction="column">
                <img src="/static/core/home/cards.png" className={classNames(classes.networkimg)}/>
              </Grid>

            </Grid>

          </Grid>
          <Grid container="container" justify="center" style={{
              backgroundColor: '#f6f6f6'
            }} className={classNames(classes.commonPadding)}>
            <Grid item="item" xs={12} container="container" direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item="item" xs={12}>
                      <Subscribe language={'English'}/>

              </Grid>
            </Grid>
          </Grid>

{/*
          <div className={classNames(classes.investmentGuide, classes.commonPadding)}>
            <Grid container="container" justify="center">
              <Grid item="item" xs={12} className={classes.maxWidth}>
                <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide1)}>Partner with CryptoQuant</Typography>

                <div>

                  <Typography className={classNames(classes.nunitoSansSemiBold, classes.investmentGuide2)}>See how we can give you insights into the data that drives your business.</Typography>
                </div>

                <Grid style={{
                    marginTop: '37px'
                  }} container="container" justify="flex-start">
                  <Button id="home-forinvestors" className={classNames(classes.buttonHelp, classes.marginRight)} variant="outlined" href={"mailto:contact@cryptoquant.com"}>Become a Partner
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
          */}

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
