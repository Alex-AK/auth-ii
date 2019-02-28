// package imports
import React, { Component } from 'react';

// component imports
import { Route } from 'react-router';
import NavigationView from './NavigationView';
import Home from '../02-components/Home/Home';
import Login from '../02-components/Login/Login';
import Register from '../02-components/Login/Register';

export class HomeView extends Component {
  render() {
    return (
      <>
        <NavigationView />
        <Route exact path="/" render={props => <Home />} />
        <Route path="/login" render={props => <Login />} />
        <Route path="/register" render={props => <Register />} />
      </>
    );
  }
}

export default HomeView;
