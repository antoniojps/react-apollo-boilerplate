import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Nav } from '../index';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Nav />
    <Main>{children}</Main>
  </LayoutWrapper>
);

const Main = styled.main`
  background-color: ${props => props.theme.colors.grey};
  padding: ${props => props.theme.spacing.m};
  min-height: 400px;
`;

const LayoutWrapper = styled.div`
  height: 100%;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
