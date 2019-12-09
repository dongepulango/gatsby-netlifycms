import React from 'react';
//gatsby
import { Link, graphql } from 'gatsby';
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
import Button from '../components/button';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomePageWrap = styled.section`
  position: relative;
`;

const HomeHero = styled.div`
  position: relative;
  padding-top: ${vars.rems.f150};
  padding-bottom: ${vars.rems.f150};
  border-bottom: 1px solid #f6edfa;
  border-top: 1px solid #f6edfa;
  background: #fcfaff;
  text-align: center;
  .image-wrap {
    margin-bottom: 40px;
  }
  ${Heading} {
    font-weight: bold;
    margin-bottom: 15px;
  }
  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HomeContent = styled.div`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
  button {
    margin-top: 20px;
  }
`;

//template
export const HomePageTemplate = ({ heading, subheading, logo, image, description }) => {
  return (
    <HomePageWrap>
      <HomeHero>
        <Container>
          <div className="image-wrap">
            <Image fluid={logo} center/>
          </div>
          <Heading heading1>{heading}</Heading>
          <p>{subheading}</p>
        </Container>
      </HomeHero>
      <HomeContent>
        <Container>
          <Row>
            <Col md={6}>
              <Image fluid={image} center />
            </Col>
            <Col md={6}>
              <Heading heading2>Welcome</Heading>
              <p>{description}</p>
              <Link to="/blog">
                <Button primary>Visit Blog</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </HomeContent>
    </HomePageWrap>
  );
};

//page
const HomePage = ({ data }) => {

  const { frontmatter: page } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <PageTransition>
        <HomePageTemplate
          title={page.title}
          heading={page.heading}
          subheading={page.subheading}
          logo={page.logo.childImageSharp.fluid}
          image={page.image.childImageSharp.fluid}
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
        heading
        subheading
        description
        logo {
          childImageSharp {
            fluid(maxWidth: 75) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
        image{
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`;

export default HomePage;