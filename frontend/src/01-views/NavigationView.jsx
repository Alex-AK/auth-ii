// package imports
import React from 'react';
import styled from 'styled-components';

// component imports
// import { Link } from 'react-router-dom';
import SecondNav from '../02-components/Navigation/SecondNav';
import TopNav from '../02-components/Navigation/TopNav';

const NavigationView = () => {
  return (
    <Nav>
      <TopNav />
      {/* logo */}

      <div>
        <SecondNav />
      </div>
    </Nav>
  );
};

export default NavigationView;

const Nav = styled.nav`
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  h1 {
    margin: 20px 0 30px 20px;
    letter-spacing: 1.2px;
  }
`;
