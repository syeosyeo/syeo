import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import { RedocStandalone } from 'redoc';
import Header from './Header';
import Footer from './Footer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class APIDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yoffset: 0,
    };
  }

  componentDidMount() {
    const appbar = document.getElementById('appbar');
    const yoffset = appbar.clientHeight;
    if (this.state.yoffset !== yoffset) {
      this.setState({ yoffset });
    }
  }

  componentDidUpdate() {
    const appbar = document.getElementById('appbar');
    const yoffset = appbar.clientHeight;
    if (this.state.yoffset !== yoffset) {
      this.setState({ yoffset });
    }
  }

  render() {
    const {classes, language} = this.props;
    const {yoffset} = this.state;

    return (
      <div>
        <Header indocs={true} language={language}/> 
        <div style={{paddingTop: yoffset}}>
        <RedocStandalone
          specUrl="/static/core/docs/swagger.yaml"
          options={{
            scrollYOffset: yoffset,
            hideDownloadButton: true,
        }}/>
        </div>
        <Footer language={"English"}/>
      </div>
    );

  }
}

APIDocs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(APIDocs);