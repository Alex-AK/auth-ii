// package imports
import React from 'react';

// component imports
// import { Link } from 'react-router-dom';
import TopNav from '../02-components/Navigation/TopNav';

const NavigationView = props => {
  return <TopNav handleLogout={props.handleLogout} />;
};

export default NavigationView;
