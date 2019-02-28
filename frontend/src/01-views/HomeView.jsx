// package imports
import React, { Component } from 'react';

// component imports
import { Route } from 'react-router';
import NavigationView from './NavigationView';
import Home from '../02-components/Home/Home';
import LoginView from './LoginView';

export class HomeView extends Component {
  handleLogout = () => {
    localStorage.clear('token');
  };

  render() {
    return (
      <>
        <NavigationView handleLogout={this.handleLogout} />
        <Route exact path="/" render={props => <Home />} />
        <LoginView />
      </>
    );
  }
}

export default HomeView;
