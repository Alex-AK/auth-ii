// package imports
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <HomeStyles>
        <h1>Welcome!</h1>
      </HomeStyles>
    </>
  );
};

export default Home;

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;
