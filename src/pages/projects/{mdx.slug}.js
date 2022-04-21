import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

const Project = (props) => {
  return (
    <Layout>
      <h1>{ props.data.mdx.frontmatter.title }</h1>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export default Project;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        company
      }
      body
    }
  }
`;