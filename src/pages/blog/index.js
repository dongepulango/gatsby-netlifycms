import React from 'react';
//gatsby
import { Link, useStaticQuery, graphql } from 'gatsby';
//styles
import styled from 'styled-components';
import vars from '../../components/varss';
//page transition
import PageTransition from 'gatsby-plugin-page-transitions';
//components
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Container from '../../components/container';
import Heading from '../../components/heading';

//styled
const BlogPageWrap = styled.section`
  position: relative;
  padding-top: ${vars.rems.f50};
  padding-bottom: ${vars.rems.f50};
`;

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 4px solid #fafafa;
    h2 {
      margin-bottom: 10px;
      font-weight: bold;
      > a {
        color: ${vars.colors.textDark};
        &:hover,
        &:focus,
        &:active {
          color: rebeccapurple;
        }
      }
      span {
        display: block;
        color: ${vars.colors.textLight};
        font-weight: normal;
        font-size: ${vars.rems.f16};
        line-height: 2;
      }
    }
    p {
      font-size: ${vars.rems.f18};
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
    > a {
      display: inline-block;
      margin-top: 20px;
      color: rebeccapurple;
      border-bottom: 1px solid rebeccapurple;
    }
  }
`;

const BlogPage = () => {

  //graphql query
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blogPost"}}}, sort: {fields: frontmatter___date, order: ASC}, limit: 5) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <PageTransition>
        <BlogPageWrap>
          <Container maxWidth={'800px'}>
            <Heading>Blog</Heading> 
            <BlogList>
              {data.allMarkdownRemark.edges.map((item) => (
                <li key={item.node.id}>
                  <Heading heading1 as={'h2'}>
                    <Link to={`${item.node.fields.slug}`}>{item.node.frontmatter.title}</Link>
                    <span>{item.node.frontmatter.date}</span>
                  </Heading>
                  <p>{item.node.excerpt}</p>
                  <Link to={`${item.node.fields.slug}`}>Read More</Link>
                </li>
              ))}
            </BlogList>
          </Container>
        </BlogPageWrap>
      </PageTransition>
    </Layout>
  );
};

export default BlogPage;