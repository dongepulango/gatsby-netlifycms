import React from 'react';
//styles
import styled from 'styled-components';
import vars from './varss';
//components
import Container from './container';

//styled
const FooterWrap = styled.footer`
  position: relative;
  border-top: 1px solid #f6edfa;
  padding-top: ${vars.rems.f30};
  padding-bottom: ${vars.rems.f30};
  text-align: center;
  color: ${vars.colors.textLight};
  font-size: ${vars.rems.f14};
`;

const Footer = (props) => {
  return (
    <FooterWrap>
      <Container>
        <p>&copy; Copyright {new Date().getFullYear()}</p>
      </Container>
    </FooterWrap>
  );
};

export default Footer;