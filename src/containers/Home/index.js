import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Home = () => (
  <div className="App">
    <Center>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello editor!</h1>
    </Center>
  </div>
);

const Center = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 120px;
    height: auto;
  }
`;

export default Home;
