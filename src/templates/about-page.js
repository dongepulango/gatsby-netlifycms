import React from 'react';
//gatsby
import { graphql } from 'gatsby';
//styles
import styled from 'styled-components';
//page transition
import PageTransition from 'gatsby-plugin-page-transitions';
//components
import Layout from '../components/layout';
import Container from '../components/container';
import Heading from '../components/heading';

//styled
const AboutPageWrap = styled.section`
  position: relative;
`;

export const AboutPageTemplate = ({ title, content}) => {

  return (
    <AboutPageWrap>
      <Container>
        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </AboutPageWrap>
  )
};

const AboutPage = ({ data }) => {

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageTransition>
        <AboutPageTemplate
          title={post.frontmatter.title}
          content={post.html}
        />
      </PageTransition>
    </Layout>
  )
};

//page query
export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default AboutPage;
