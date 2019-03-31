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
import Subscribe from './Subscribe';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  marginTopXSOnly: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3,
    }
  },
  gutterBottom: {
    marginBottom: theme.spacing.unit * 3,
  },
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
  buttonSubscribe: {
    backgroundColor: '#322956',
    boxShadow: 'none',
    borderRadius: 0,
    height: '53px',
    color: '#ffffff',
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
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
      marginBottom: theme.spacing.unit * 5,
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
      paddingTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 5,
    },
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
      marginLeft: theme.spacing.unit * 2,
    }
  },
  banner1: {
    color: '#ffffff',
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    }
  },
  banner15: {
    color: '#ffffff',
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 33,
    }
  },
  banner2: {
    color: '#ffffff',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
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
      display: 'none',
    },
  },
  serviceGrid: {
    maxWidth: '360px',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '600px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '500px'
    }
  },
  serviceTitle: {
    height: '160px',
    marginBottom: theme.spacing.unit * 2,
  },
  serviceButton: {
    width: '140px',
    height: '40px',
    borderRadius: 25,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    color: '#322956',
    [theme.breakpoints.up('xl')]: {
      width: '180px',
    }
  },
  maxWidth: {
    maxWidth: '1200px',
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes, language } = this.props;
    return (
      <div>
        <Header language={language} />
        <main>
          <Grid container justify="center" style={{backgroundColor: '#fbfbfb'}}>

            <div className={classNames(classes.banner, classes.commonPadding)}>
              <Grid container justify="center">
                <Grid className={classNames(classes.paddingBanner, classes.maxWidth)}>
                  <div className={classes.flexDisplay}>
                    <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>Shaping The Future of</Typography>
                    <Typography className={classNames(classes.nunitoSansBlack, classes.marginLeftUpMd, classes.banner15)}>Digital Asset Securities</Typography>
                  </div>
                  <div>
                    <Typography className={classNames(classes.nunitoSansRegular, classes.banner2)}>We go deep to unlock insight and have the courage to act on security tokens. We bring the right technologies and people together to tokenize digital assets.</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>

            <Grid container justify="center" style={{backgroundColor: '#f6f6f6'}} className={classNames(classes.commonPadding)}>
            <Grid item xs={12} container direction="row" justify="space-between" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item xs={12}>
                <Typography style={{color: '#1d1537', fontSize: 24,}} className={classNames(classes.nunitoSansBold,)}>Our Services</Typography>
              </Grid>

              <Grid item xs={12} sm={3} container direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item xs={12} container direction="column" justify="flex-start">
                <Grid item xs={12} container direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                  <img src="/static/core/home/dasresearch.svg"/>
                  { language=="English" &&
                  <Typography style={{color: '#373737', fontSize: 18,}} className={classNames(classes.nunitoSansBold,)}>DAS Research</Typography>
                  }{ language=="Korean" &&
                  <Typography style={{color: '#373737', fontSize: 18, fontWeight: 700}} className={classNames(classes.spoqaHanSans,)}>DAS 리서치</Typography>
                  }
                </Grid>
                <Grid item xs={12} className={classes.serviceDetail}>
                { language=="English" &&
                <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.nunitoSansRegular)}>A research team of experts publishes reports on Digital Asset Securities markets and technologies. Insights and new opportunities are discovered through in-depth analysis.</Typography>
                }{ language=="Korean" &&
                <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.spoqaHanSans)}>전문가들로 구성된 리서치팀이 디지털 자산 증권 시장과 기술에 대한 보고서를 발간합니다. 깊이 있는 분석을 통해 인사이트와 새로운 기회를 찾아냅니다.</Typography>

                }
                </Grid>
                </Grid>
                { language=="English" &&
                <Button id="home-research" href="/research" variant="outlined" style={{border: '2px solid #322956',}} className={classNames(classes.serviceButton)}>See in Details</Button>
                }{ language=="Korean" &&
                <Button id="home-research" href="/research" variant="outlined" style={{border: '2px solid #322956',}} className={classNames(classes.serviceButton)}>자세히 보기</Button>
                }
              </Grid>
              <Grid item xs={12} sm={3} container direction="column" justify="space-between" className={classNames(classes.serviceGrid, classes.serviceMarginRight)}>
                <Grid item xs={12} container direction="column" justify="flex-start">
                <Grid item xs={12} container direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                  <img src="/static/core/home/storadar.svg"/>
                  { language=="English" &&
                  <Typography style={{ color: '#373737', fontSize: 18,}} className={classNames(classes.nunitoSansBold,)}>STO Radar</Typography>
                  }{ language=="Korean" &&
                  <Typography style={{ color: '#373737', fontSize: 18, fontWeight: 700,}} className={classNames(classes.spoqaHanSans,)}>STO Radar</Typography>
                  }
                </Grid>
                <Grid item xs={12} className={classes.serviceDetail}>
                  { language=="English" &&
                  <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.nunitoSansRegular)}>Check out the latest STO list organized by regulation and security type. Investment guide and sales notification for accredited investors is provided.</Typography>
                  }{ language=="Korean" &&
                  <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.spoqaHanSans)}>규제와 자산 종류에 따라 정리된 최신 STO 리스트를 확인하세요. 적격 투자자를 위한 투자 가이드와 큐레이션이 제공됩니다.</Typography>
                  }
                </Grid>
                </Grid>
                { language=="English" &&
                <Button id="home-storadar" href="/sto_radar" variant='outlined' style={{border: '2px solid #322956',}} className={classNames(classes.serviceButton)}>View STO List</Button>
                }{ language=="Korean" &&
                <Button id="home-storadar" href="/sto_radar" variant='outlined' style={{border: '2px solid #322956',}} className={classNames(classes.serviceButton)}>STO 리스트 보기</Button>
                }
              </Grid>
              <Grid item xs={12} sm={3} container direction="column" justify="space-between" className={classes.serviceGrid}>
                <Grid item xs={12} container direction="column" justify="flex-start">
                <Grid item xs={12} container direction="column" alignItems="flex-start" justify="space-evenly" className={classes.serviceTitle}>
                  <img src="/static/core/home/endtoend.svg"/>
                  { language=="English" &&
                  <Typography style={{ color: '#373737', fontSize: 18,}} className={classNames(classes.nunitoSansBold,)}>End-to-End<br/>Digital Asset Management</Typography>
                  }{ language=="Korean" &&
                  <Typography style={{ color: '#373737', fontSize: 18, fontWeight: 700,}} className={classNames(classes.spoqaHanSans,)}>End-to-End<br/>디지털 자산 관리</Typography>
                  }
                </Grid>
                <Grid item xs={12} className={classes.serviceDetail}>
                  { language=="English" &&
                  <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.nunitoSansRegular)}>From KYC and whitelisting of wallets using ZKProof technology to community creation for shareholders, we support compliance and enhanced privacy in every step.</Typography>
                  }{ language=="Korean" &&
                  <Typography align="justify" style={{color: '#484848', fontSize: 16,}} className={classNames(classes.nunitoSansRegular)}>ZKProof 기술을 사용한 KYC 및 지갑 화이트리스팅부터 투자자를 위한 커뮤니티 생성까지, 디지털 자산 관리의 모든 단계에서 규제를 준수하고 개인 정보를 보호할 수 있습니다.</Typography>
                  }
                </Grid>
                </Grid>
                { language=="English" &&
                <Button id="home-management" variant='contained' style={{color: '#6a6a6a', backgroundColor: '#ededed',}} className={classNames(classes.serviceButton)} disabled>Coming Soon</Button>
                }{ language=="Korean" &&
                <Button id="home-management" variant='contained' style={{color: '#6a6a6a', backgroundColor: '#ededed',}} className={classNames(classes.serviceButton)} disabled>준비중</Button>
                }
              </Grid>
            </Grid>
            </Grid>

            <Grid container justify="center" className={classNames(classes.commonPadding)}>
            <Grid item xs={12} container direction="column" justify="flex-start" className={classNames(classes.heightFitContent, classes.maxWidth)}>
              <Grid item xs={12} container direction="column">
                <Typography style={{marginBottom: '12px', color: '#1d1537', fontSize: 24,}} className={classNames(classes.nunitoSansBold,)}>Security Tokens List</Typography>
                {language == 'English' &&
                <Typography style={{fontSize: 16, color: '#373737'}} className={classes.nunitoSansRegular}>Check out the latest STO list organized by regulation type.</Typography>
                }{language == 'Korean' &&
                <Typography style={{fontSize: 16, color: '#373737'}} className={classes.spoqaHanSans}>규제별로 정리된 최신 STO 리스트를 한눈에 확인하세요.</Typography>
                }
              </Grid>

              <Grid className={classes.projectTable}>
                  <ProjectTable language={language} pageSize={5} />
              </Grid>

              <Grid item xs={12} container justify="center" className={classes.marginTopXSOnly}>
                <Typography style={{color: '#373737', fontSize: 16,}} className={classNames(classes.nunitoSansSemiBold)}>Cannot find your project? <a id="home-getlisted" href="https://dasfinance.typeform.com/to/OXx9UJ" className={classes.link}>Get listed</a></Typography>
              </Grid>
            </Grid>
            </Grid>


            <div className={classNames(classes.investmentGuide, classes.commonPadding)}>
              <Grid container justify="center">
              <Grid item xs={12} className={classes.maxWidth}>
                <Typography className={classNames(classes.nunitoSansBold, classes.investmentGuide1)}>Get Started</Typography>
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
                  <Button id="home-forinvestors" className={classNames(classes.buttonHelp, classes.marginRight)} variant="outlined"
                  href={language=="Korean"? "https://dasfinance.typeform.com/to/v4HNG4": "https://dasfinance.typeform.com/to/Xk7xui"}
                  >For Investors <ArrowRightAlt className={classes.marginLeft}/></Button>
                  <Button id="home-forissuers" className={classes.buttonHelp} variant="outlined"
                  href="https://dasfinance.typeform.com/to/JHADCZ"
                  >For Issuers <ArrowRightAlt className={classes.marginLeft}/></Button>
                </Grid>
              </Grid>
              </Grid>
            </div>
            
            <Grid container justify="center" className={classes.commonPadding}>
            <Grid item xs={12} className={classes.maxWidth}>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home);
