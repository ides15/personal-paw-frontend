import React, { Component } from 'react';
import logo from './logo.svg';

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import AppContainer from './containers/App/AppContainer'

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={AppContainer}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
