import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import STO_theme from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

var home = document.getElementById("home");
var css_baseline = document.getElementById("css_baseline");
var footer = document.getElementById("footer");
var header = document.getElementById("header");
var privacy_policy = document.getElementById("privacy_policy");
var terms_of_service = document.getElementById("terms_of_service");

const csrftoken = getCookie('csrftoken');

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
            	cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            	break;
            }
        }
    }
    return cookieValue;
};

function csrfSafeMethod(method) {
	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

if(css_baseline) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <CssBaseline />
    </MuiThemeProvider>
  , css_baseline);
}

if(home) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <Home />
    </MuiThemeProvider>
  , home);
}

if(footer) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <Footer />
    </MuiThemeProvider>
  , footer);
}

if(header) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <Header />
    </MuiThemeProvider>
  , header);
}

if(privacy_policy) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <PrivacyPolicy />
    </MuiThemeProvider>
  , privacy_policy);
}

if(terms_of_service) {
  ReactDOM.render(
    <MuiThemeProvider theme={STO_theme}>
      <TermsOfService />
    </MuiThemeProvider>
  , terms_of_service);
}
