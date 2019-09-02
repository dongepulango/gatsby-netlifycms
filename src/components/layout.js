import React from 'react';
//helmet
import { Helmet } from "react-helmet";
//style
import styled, { createGlobalStyle } from 'styled-components';
import vars from './varss';
import reset from './reset';
import typography from './typography';
//components
import Header from "./header";
import Footer from "./footer";
//favicons
import favicon from "../img/favicon/favicon.ico";
import favicon16 from "../img/favicon/favicon-16x16.png";
import favicon32 from "../img/favicon/favicon-32x32.png";
import faviconApple from "../img/favicon/apple-touch-icon.png";
import faviconSafari from "../img/favicon/safari-pinned-tab.svg";

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
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="shortcut icon" href={favicon} />
        <link rel="mask-icon" href={faviconSafari} color="#5bbad5" />
      </Helmet>
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