// package imports
import React from 'react';
import styled from 'styled-components';

// component imports
import { NavLink } from 'react-router-dom';

const SecondNav = () => {
  return (
    <NavButtons>
      <NavLink exact to="/login">
        <h5>login</h5>
      </NavLink>
      <NavLink exact to="/register">
        <h5>register</h5>
      </NavLink>
    </NavButtons>
  );
};

export default SecondNav;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
`;
