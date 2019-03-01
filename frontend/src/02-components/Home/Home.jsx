// package imports
import React, { Component } from 'react';
import styled from 'styled-components';
import User from '../Users/User';
import axios from 'axios';

import Authentication from '../Auth/Authentication';
class Home extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('/users', { headers: { Authorization: this.props.token } })
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const mappedUsers = this.state.users.map(user => (
      <User key={user.id} id={user.id} username={user.username} />
    ));

    return (
      <>
        <HomeStyles>
          <h1>List of Users</h1>
          {mappedUsers}
        </HomeStyles>
      </>
    );
  }
}
export default Authentication(Home);

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  h1 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;
