// package imports
import React, { Component } from 'react';

// component imports
import { Route } from 'react-router';
import NavigationView from './NavigationView';
import Home from '../02-components/Home/Home';
import LoginView from './LoginView';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';
export class HomeView extends Component {
  state = {
    users: [1]
  };

  componentDidMount() {
    axios
      .get('/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  handleLogout = () => {
    localStorage.clear('token');
  };

  render() {
    return (
      <>
        <NavigationView handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={props => <Home users={this.state.users} />}
        />
        <LoginView />
      </>
    );
  }
}

// HOC authentication for HomeView
export default HomeView;
