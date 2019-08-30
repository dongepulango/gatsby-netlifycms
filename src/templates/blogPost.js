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
const BlogPostWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
  .featured-image {
    margin-bottom: 30px;
  }
`;

const PostHTML = styled.div`
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  p {
    font-size: ${vars.rems.f18};
    line-height: 2.3;
    font-family: Georgia, 'Times New Roman', Times, serif;
    + h1,
    + h2,
    + h3,
    + h4,
    + h5,
    + h6 {
      margin-top: 60px;
    }
  }
`;

//template
export const BlogPostTemplate = ({ title, content, featuredPost, featuredImage }) => {
  return (
    <BlogPostWrap featuredPost={featuredPost}>
      <Container maxWidth={'800px'}>
        <Heading>{title}</Heading>
        <Image fluid={featuredImage} className="featured-image" />
        <PostHTML dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </BlogPostWrap>
  );
};

//page
const BlogPost = ({ data }) => {

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PageTransition>
        <BlogPostTemplate
          title={post.frontmatter.title}
          featuredPost={post.frontmatter.featuredpost}
          featuredImage={post.frontmatter.featuredimage.childImageSharp.fluid}
          content={post.html}
        />
      </PageTransition>
    </Layout>
  );
};

//page query
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;