import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
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
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24,
  },
});

class Tech extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { classes, language } = this.props;

    return(
      <div>
        <Header language={language} />
        
        <Footer language={language} />
      </div>
    );
  }
}

Tech.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Tech);