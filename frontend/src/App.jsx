// package imports
import React, { Component } from 'react';
import styled from 'styled-components';

// css reset
import './reset.css';
// component imports
import { HomeView } from './01-views/HomeView';

class App extends Component {
  render() {
    return (
      <AppStyle>
        <HomeView />
      </AppStyle>
    );
  }
}

export default App;

const AppStyle = styled.div`
  background: #f9f9f9;
`;
