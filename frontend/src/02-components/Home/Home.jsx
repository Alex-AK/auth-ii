// package imports
import React from 'react';
import styled from 'styled-components';
import User from '../Users/User';

const Home = props => {
  const mappedUsers = props.users.map(user => <User key={'user'} />);
  return (
    <>
      <HomeStyles>
        <h1>List of Users</h1>
        {mappedUsers}
      </HomeStyles>
    </>
  );
};

export default Home;

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
