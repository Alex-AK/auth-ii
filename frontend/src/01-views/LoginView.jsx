import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router';
import Login from '../02-components/Login/Login';
import Register from '../02-components/Login/Register';

axios.defaults.baseURL = 'http://localhost:4000/api';

class LoginView extends Component {
  state = {
    isNewUser: false,
    user: {
      username: '',
      password: ''
    }
  };

  handleLogin = e => {
    e.preventDefault();
    axios
      .post('/login', this.state.user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
      .catch(error => console.error(error));
    this.setState({
      user: {
        username: '',
        password: ''
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  render() {
    let { username, password } = this.state.user;

    return (
      <>
        <Route
          path="/login"
          render={props => (
            <Login
              username={username}
              password={password}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
            />
          )}
        />
        <Route
          path="/register"
          render={props => (
            <Register
              username={username}
              password={password}
              handleChange={this.handleChange}
            />
          )}
        />
      </>
    );
  }
}

export default withRouter(LoginView);
