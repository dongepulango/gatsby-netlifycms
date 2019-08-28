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
import Image from '../components/image';

//styled
const HomePageWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

//template
export const HomePageTemplate = ({title, image, heading, subheading, description,}) => {
  return (
    <HomePageWrap>
      <Container>
        <p>{title}</p>
        <Heading>{heading}</Heading>
        <Heading as={'h2'} heading2>{subheading}</Heading>
        <p>{description}</p>
        <Image fluid={image} center />
      </Container>
    </HomePageWrap>
  );
};

//page
const HomePage = ({ data }) => {

  const { frontmatter : page } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <PageTransition>
        <HomePageTemplate
          image={page.image.childImageSharp.fluid}
          title={page.title}
          heading={page.heading}
          subheading={page.subheading}
          description={page.description}
        />
      </PageTransition>
    </Layout>
  );
};

//page query
export const homePageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "indexPage" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      }
    }
  }
`;

export default HomePage;