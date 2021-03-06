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
const ContactPageWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

//template
export const ContactPageTemplate = ({ title, content}) => {
  return (
    <ContactPageWrap>
      <Container>
        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Container>
    </ContactPageWrap>
  );
};

//page
const ContactPage = ({ data }) => {

  const { markdownRemark: page } = data;

  return (
    <Layout>
      <SEO title="Contact" />
      <PageTransition>
        <ContactPageTemplate
          title={page.frontmatter.title}
          content={page.html}
        />
      </PageTransition>
    </Layout>
  );
};

//page query
export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contactPage" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ContactPage;