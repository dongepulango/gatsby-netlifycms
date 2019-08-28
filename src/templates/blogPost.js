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
const BlogPostWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

//template
export const BlogPostTemplate = ({title, description, content}) => {
  return (
    <BlogPostWrap>
      <Container>
        <Heading>{title}</Heading>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
          content={post.html}
          description={post.frontmatter.description}
          title={post.frontmatter.title}
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
        description
      }
    }
  }
`;

export default BlogPost;