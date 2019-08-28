import React from 'react';
//styles
import styled from 'styled-components';
import vars from '../components/varss';
//page transition
import PageTransition from 'gatsby-plugin-page-transitions';
//components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Heading from '../components/heading';

//styled
const NotFoundPageWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
  text-align: center;
`;

const NotFoundPage = () => {
  return(
    <Layout>
      <SEO title="404" />
      <PageTransition>
        <NotFoundPageWrap>
          <Container>
            <Heading>404 Page Not Found</Heading>
            <p>You just went to a page that doesn&#39;t exist...the sadness.</p>
          </Container>
        </NotFoundPageWrap>
      </PageTransition>
    </Layout>
  );
};

export default NotFoundPage;