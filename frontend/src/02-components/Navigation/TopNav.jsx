// package imports
import React from 'react';
import styled from 'styled-components';

// component imports
import { Link, NavLink } from 'react-router-dom';

const TopNav = props => {
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
        <Link to="/login" onClick={props.handleLogout}>
          <h5>logout</h5>
        </Link>
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

  a {
    font-size: 1rem;
    text-decoration: none;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 10px 20px;
    background: white;
    color: black;
    margin: 0 10px;

    &:hover {
      background: teal;
      color: white;
    }
  }

  .active {
    color: teal;
  }

  h1 {
    font-size: 2rem;
    margin-left: 20px;
  }

  div {
    display: flex;
    margin-right: 20px;
  }
`;
