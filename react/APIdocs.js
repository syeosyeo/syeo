{/*
  Redocs styling document:
  https://github.com/Redocly/redoc/blob/5dd5d6d704ec6e6f739c6f0c4ac868c73fbca0a0/src/theme.ts
*/}

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {RedocStandalone} from 'redoc';
import Header from './Header';
import Footer from './Footer';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class APIDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yoffset: 0
    };
  }

  componentDidMount() {
    const appbar = document.getElementById('appbar');
    const yoffset = appbar.clientHeight;
    if (this.state.yoffset !== yoffset) {
      this.setState({yoffset});
    }
  }

  componentDidUpdate() {
    const appbar = document.getElementById('appbar');
    const yoffset = appbar.clientHeight;
    if (this.state.yoffset !== yoffset) {
      this.setState({yoffset});
    }
  }

  render() {
    const {classes, language} = this.props;
    const {yoffset} = this.state;

    return (<div>
      <Header indocs={true} language={language}/>
      <div style={{
          paddingTop: yoffset
        }}>
        <RedocStandalone specUrl="/static/core/docs/openapi.yaml" options={{
            scrollYOffset: yoffset,
            hideDownloadButton: true,
            theme: {
              typography: {
                fontFamily: 'Roboto',
                headings: {
                  fontFamily: 'DM Sans',
                  fontWeight: "800",
                },
                links: {
                  color: '#EA533C'
                }
              },
              menu: {
                backgroundColor: '#1E2A35',
                textColor: '#FAF8F7'
              },
              rightPanel: {
                backgroundColor: '#1E2A35'
              },
              colors: {
                primary: {
                  main: '#EA533C',
                }
              }
            }
          }}/>
      </div>
      <Footer language={"English"}/>
    </div>);

  }
}

APIDocs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(APIDocs);
