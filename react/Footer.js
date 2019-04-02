import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  footer: {
    backgroundColor: '#35333b',
    minHeight: 215,
    marginTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
  },
  widthAuto: {
    width: '100%',
    height: 'fit-content',
  },
  dasfinance: {
    color: '#ffffff',
    fontFamily: "Ramaraja",
    fontSize: 36,
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  copyright: {
    color: '#ffffff',
    fontFamily: "Helvetica",
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    }
  },
  link: {
    color: '#ffffff',
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
  },
  caption: {
    color: '#d8d8d8',
    fontFamily: "'Helvetica', 'Spoqa Han Sans'",
    fontSize: 7,
  },
  visibleXSOnly: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  telegram: {
    color: '#35333b',
    backgroundColor: '#ffffff',
    fontSize: 17,
    padding: 2,
    borderRadius: 2,
  },
  iconButton: {
    padding: 0,
  },
  maxWidth: {
    maxWidth: '1200px',
  }
});

class Footer extends React.Component {
  render() {
    const { classes, className, language } = this.props;

    return (
      <Grid container direction='row' alignItems='center' justify="center" className={classNames(classes.footer)}>
        <Grid container justify="center" className={classes.maxWidth}>
        <Grid container direction='row' alignItems='center' justify='center' item xs={12} className={classNames(classes.maxWidth)}>
          <Grid item xs={12} sm={5} container direction='row' justify='flex-start' className={classNames(classes.widthAuto)}>
            <Grid item xs={12} sm={12} container justify='flex-start' alignItems='flex-end' className={classes.widthAuto}>
              <Typography className={classes.dasfinance}>CryptoQuant</Typography>
            </Grid>
            <Grid style={{marginTop: '-5px'}} item xs={12} sm={12} container justify='flex-start' alignItems='flex-start' className={classes.widthAuto}>
              <Typography className={classes.copyright}>&copy; 2019 CryptoQuant. All rights reserved</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={7} container direction='row' justify='space-between' alignItems='center' className={classNames(classes.widthAuto)}>
            <Grid item xs={3} className={classes.widthAuto} container justify='center'>
              <Button href="/terms_of_service">
                <Typography className={classes.link} align='center'>Terms of service</Typography>
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.widthAuto} container justify='center'>
              <Button href="/privacy_policy">
                <Typography className={classes.link} align='center'>Privacy Policy</Typography>
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.widthAuto} container justify='center'>
              <Button href="mailto:contact@cryptoquant.com">
                <Typography className={classes.link} align='center'>Contact Us</Typography>
              </Button>
            </Grid>
            {/* Social Links */}
            {/*
            <Grid item xs={3} container justify="space-evenly">
              <IconButton href={"https://medium.com/dasfinance"} className={classes.iconButton}>
                <i style={{color: '#ffffff'}} className={classNames("fab", "fa-medium")}/>
              </IconButton>
              <IconButton href={"https://twitter.com/das_finance"} className={classes.iconButton}>
                <i style={{color: '#ffffff'}} className={classNames("fab","fa-twitter-square")} />
              </IconButton>
              <IconButton href={"https://t.me/storesearch"} className={classes.iconButton}>
                <i className={classNames("fab","fa-telegram-plane", classes.telegram)}/>
              </IconButton>
            </Grid>
            */}
          </Grid>
        </Grid>

        <Grid container alignItems='flex-start' item xs={12} className={classNames(classes.widthAuto)}>
          {language=='English' &&
          <Typography className={classNames(classes.caption)} align='justify'>
          CryptoQuant does not verify any information that is provided by suppliers or publishers. We do not guarantee timeliness, correctness, or completeness. CryptoQuant is not either a registered broker-dealer or investment consultant under any jurisdiction. Any information that is provided is not registered at financial authorities. We do not provide any investment services such as financial investing or purchasing tokens. All information from our company is originally from the suppliers and publishers. The purpose of the information that is provided is not for supporting any specific financial account or security. We do not want you to consider the information as an investment recommendation. We suggest you not to rely on the information. The information that is found on the website is only for educational and informative purposes. Terms and conditions apply to any action on the website.
          </Typography>
          }{language=='Korean' &&
          <Typography className={classes.caption} align='justify'>
          CryptoQuant (https://cryptoquant.com)는 본 사이트의 Security Token Offering 제공 업체 및 발행 업체가 제공한 정보를 검증하지 않으며, 해당 정보의 정확성, 적시성 및 완전성에 대해 어떠한 보증도 하지 않습니다. 또한, CryptoQuant는 관할권에 등록된 브로커 - 딜러 또는 투자 자문가가 아니며 이 사이트에서 발견 된 어떠한 정보도 금융 당국에 등록되지 않았습니다. 자사에서 제공되는 정보는 STO의 제공 업체 및 발급 기관이 CryptoQuant에게 제공한 정보에 기초합니다. 금융 상품 또는 유가 증권의 매매에 대한 제안이나 권유를 목적으로 하지 않으며, 투자 추천이나 조언으로 보거나 의존해서는 안됩니다. 이 사이트에서 제공되는 모든 정보와 내용은 정보 제공 및 교육 목적으로만 제공됩니다.  사이트의 모든 활동은 이용 약관의 적용을 받습니다.
          </Typography>
          }
        </Grid>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Footer);
