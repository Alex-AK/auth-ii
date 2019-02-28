import React from 'react';
import styled from 'styled-components';

const Authentication = Component => {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const notLoggedIn = (
        <Unauthorized>Please login to see users.</Unauthorized>
      );

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
};

export default Authentication;

const Unauthorized = styled.div`
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
