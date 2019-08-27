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
import Image from '../components/image';

//styled
const HomePageWrap = styled.section`
  position: relative;
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

const HomePage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PageTransition>
        <HomePageTemplate
          image={frontmatter.image.childImageSharp.fluid}
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          description={frontmatter.description}
        />
      </PageTransition>
    </Layout>
  )
};

//page query
export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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