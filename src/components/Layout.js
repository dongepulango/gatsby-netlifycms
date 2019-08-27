import React from 'react';
//style
import styled, { createGlobalStyle } from 'styled-components';
import vars from './varss';
import reset from './reset';
import typography from './typography';
//components
import Header from "./header";
import Footer from "./footer";

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

//styled
const Main = styled.main`
  position: relative;
  padding-top: ${vars.navHeight}px;
  min-height: 100vh;
`;

const Layout = (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;