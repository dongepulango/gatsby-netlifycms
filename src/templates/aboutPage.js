import React from 'react';
//gatsby
import { graphql } from 'gatsby';
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
const AboutPageWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

//template
export const AboutPageTemplate = ({ title, content}) => {
  return (
    <AboutPageWrap>
      <Container>
        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </AboutPageWrap>
  );
};

//page
const AboutPage = ({ data }) => {

  const { markdownRemark: page } = data;

  return (
    <Layout>
      <SEO title="About" />
      <PageTransition>
        <AboutPageTemplate
          title={page.frontmatter.title}
          content={page.html}
        />
      </PageTransition>
    </Layout>
  );
};

//page query
export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "aboutPage" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default AboutPage;