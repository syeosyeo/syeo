import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import ProjectTable from './ProjectTable';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: "18pt",
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  nunitoSansSemiBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 600,
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
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
  projectTable: {
    // marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      // marginTop: theme.spacing.unit * 5,
      marginBottom: 0,
    }
  },
  heightFitContent: {
    height: 'fit-content'
  },
  banner: {
    width: "100%",
    height: "241px",
    backgroundColor: "#e6e5eb",
    [theme.breakpoints.down('sm')]:{
      height: "206px",
    }
  },
  banner1: {
    fontSize: 28,
    color: "#1d1537",
    marginBottom: "11px",
  },
  banner2: {
    fontSize: 20,
    color: "#1d1537",
  },
  marginTop: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3,
    }
  },
  maxWidth: {
    maxWidth: '1200px'
  }
});

class StoRadar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, language } = this.props;

    return(
      <div>
        <Header language={language} />
        <main>
          <div className={classes.banner}>
            <Grid container justify="center" className={classes.commonPadding}>
              <Grid item xs={12} container direction="column" justify="flex-start" className={classes.maxWidth}>
              <Typography className={classNames(classes.nunitoSansBold, classes.banner1)}>STO Radar</Typography>
              { language == "English" &&
              <Typography className={classNames(classes.nunitoSansSemiBold, classes.banner2)}>Check out the latest STO list organized by regulation and security type.</Typography>
              }{ language == "Korean" &&
              <Typography className={classNames(classes.spoqaHanSans, classes.banner2)}>규제별로 정리된 최신 STO 리스트를 한눈에 확인하세요.</Typography>
              }
              </Grid>
            </Grid>
          </div>
          <Grid item xs={12} container justify="center" className={classNames(classes.commonPadding, classes.heightFitContent)}>
            <Grid item xs={12} className={classes.maxWidth}>
            <Grid className={classes.projectTable}>
              <ProjectTable language={language} pageSize={8} />
            </Grid>
            <Grid item xs={12} container justify="center" className={classes.marginTop}>
              <Typography style={{color: '#373737', fontSize: 16,}} className={classNames(classes.nunitoSansSemiBold)}>Cannot find your project? <a href="https://dasfinance.typeform.com/to/OXx9UJ" className={classes.link}>Get listed</a></Typography>
            </Grid>
            </Grid>
          </Grid>
        </main>
        <Footer language={language} />
      </div>
    );
  }
}

StoRadar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(StoRadar);