import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Subscribe from './Subscribe';

const styles = theme => ({
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: 18,
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24,
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
  heightFitContent: {
    height: 'fit-content'
  },
  paddingBanner: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 5,
    }
  },
  banner: {
    backgroundImage: "url('/static/core/report/researchbackground.png')",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  banner1: {
    color: '#ffffff',
    fontSize: '45',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    marginBottom: theme.spacing.unit * 5,
  },
  banner2: {
    color: '#ffffff',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    marginBottom: theme.spacing.unit * 1,
  },
  paddingReport: {
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginBottom: '80px', 
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    }
  },
  reportButton: {
    width: '170px',
    height: '50px',
    borderRadius: 25,
    color: '#322956',
  },
  reportTitle: {
    color: '#1d1537',
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      marginTop: theme.spacing.unit * 3,
    }
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing.unit * 5,
    }
  },
  maxWidth: {
    maxWidth: '1200px',
  },
  buttonMargin1: {
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing.unit * 5,
    }
  },
  buttonMargin2: {
    marginTop: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 2,
    }
  },
  paddingLeft: {
    paddingLeft: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 5,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing.unit * 0,
    }
  }
});

class Research extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, language } = this.props;

    return(
      <div>
        <Header language={language} />
        
        <main>
          <Grid container direction="column" style={{backgroundColor: '#fbfbfb'}} className={classes.heightFitContent}>

            <div className={classNames(classes.banner, classes.commonPadding)}>
              <Grid container justify="center">
              <Grid item xs={12} className={classNames(classes.paddingBanner, classes.maxWidth)}>
                <div>
                  <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>DAS.Finance Research Team</Typography>
                </div>
                { language=="English" &&
                <div>
                  <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>We publish reports on Digital Asset Securities markets and technologies.</Typography>
                  <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>Insights and new opportunities are discovered through in-depth analysis.</Typography>
                </div>
                }{ language=="Korean" &&
                <div>
                  <Typography className={classNames(classes.spoqaHanSans, classes.banner2)}>전문가들로 구성된 리서치팀이 디지털 자산 증권 시장과 기술에 대한 보고서를 발간합니다.</Typography>
                  <Typography className={classNames(classes.spoqaHanSans, classes.banner2)}>깊이 있는 분석을 통해 인사이트와 새로운 기회를 찾아냅니다.</Typography>
                </div>
                }
              </Grid>
              </Grid>
            </div>

            <Grid item xs={12} container direction="row" justify="center" className={classNames(classes.commonPadding, classes.heightFitContent)}>
            <Grid item xs={12} className={classes.maxWidth}>
              <Grid item xs={12} container direction="row" className={classNames(classes.heightFitContent, classes.gutterBottom)}>
                <div>
                <Typography style={{marginBottom: '12px', color: '#1d1537', fontSize: 24,}} className={classNames(classes.nunitoSansBold,)}>DAS.Finance Report</Typography>
                { language=="English" &&
                <Typography style={{fontSize: 16, color: '#484848'}} className={classes.nunitoSansRegular}>Check out our latest report on Digital Asset Security markets and technologies.</Typography>
                }{ language=="Korean" &&
                <Typography style={{fontSize: 16, color: '#484848'}} className={classes.spoqaHanSans}>DAS.Finance 리서치 팀의 디지털 자산 증권 시장과 기술에 대한 최신 보고서를 확인하세요.</Typography>
                }
                </div>
              </Grid>
              <Grid item xs={12} container direction="row" alignItems="center" style={{backgroundColor: '#ffffff', border: '1px solid #efefef', borderRadius: 5}} className={classNames(classes.paddingReport, classes.heightFitContent)}>
                <Grid item xs={12} sm={3} container justify="center" alignItems="center">
                <img src="/static/core/report/report1.svg"/>
                </Grid>
                <Grid item xs={12} sm={9} container direction="column" alignItems="center" justify="center" className={classes.paddingLeft}>
                  <Typography align="center" className={classNames(classes.nunitoSansBold, classes.reportTitle)}>[DAS.Finance Report 01]<br/>Digital Asset Security Market Overview</Typography>
                  { language=="English" &&
                  <Grid container justify="center">
                  <Grid item xs={12} sm={5} lg={3} container justify="center" className={classes.buttonMargin1}>
                  <Button id="research-report" variant="contained" style={{color: '#6a6a6a', backgroundColor: '#ededed',}} disabled target="_blank" className={classNames(classes.reportButton)}>EN - Coming Soon</Button>
                  </Grid>
                  <Grid item xs={12} sm={5} lg={3} container justify="center" className={classes.buttonMargin2}>
                  <Button id="research-report" variant="outlined" style={{border: '2px solid #322956',}} href="/static/core/report/디지털_자산_증권_시장_분석_DASFinance.pdf" target="_blank" className={classNames(classes.reportButton)}>KR - Download</Button>
                  </Grid>
                  </Grid>
                  }{ language=="Korean" &&
                  <Grid container justify="center">
                  <Grid item xs={12} sm={5} lg={3} container justify="center" className={classes.buttonMargin1}>
                  <Button id="research-report" variant="contained" style={{color: '#6a6a6a', backgroundColor: '#ededed',}} disabled target="_blank" className={classNames(classes.reportButton)}>영문 - 준비중</Button>
                  </Grid>
                  <Grid item xs={12} sm={5} lg={3} container justify="center" className={classes.buttonMargin2}>
                  <Button id="research-report" variant="outlined" style={{border: '2px solid #322956',}} href="/static/core/report/디지털_자산_증권_시장_분석_DASFinance.pdf" target="_blank" className={classNames(classes.reportButton)}>한글 - 다운로드</Button>
                  </Grid>
                  </Grid>
                  }
                </Grid>
              </Grid>

              <Subscribe language={language}/>

            </Grid>
            </Grid>

          </Grid>
        </main>

        <Footer language={language} />
      </div>
    );
  }
}

Research.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Research);