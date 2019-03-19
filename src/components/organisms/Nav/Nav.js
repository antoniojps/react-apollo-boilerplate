import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <Navigation>
    <p>TheNav</p>
  </Navigation>
);

const Navigation = styled.nav`
  background-color: ${props => props.theme.colors.blackLight};
  padding: ${props => props.theme.spacing.m};
  min-height: 200px;
`;

export default Nav;
