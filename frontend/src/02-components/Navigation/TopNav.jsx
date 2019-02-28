// package imports
import React from 'react';
import styled from 'styled-components';

// component imports
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <Top>
      <h1>Auth Demo</h1>
      <div>
        <NavLink exact to="/login">
          <h5>login</h5>
        </NavLink>
        <NavLink exact to="/register">
          <h5>register</h5>
        </NavLink>
      </div>
    </Top>
  );
};

export default TopNav;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  h1 {
    font-size: 2rem;
    margin-left: 20px;
  }

  div {
    display: flex;

    h5 {
      margin: 0 10px;
    }
  }
`;
