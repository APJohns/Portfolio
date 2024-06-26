import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';
import IconBackSVG from '../../images/svgs/iconBack.inline.svg';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Project = (props) => {
  const data = props.data.mdx;

  return (
    <Layout hasImage={false} title={data.frontmatter.title} subTitle={data.frontmatter.subTitle}>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-auto mb-4">
              <Link to="/" className="link-icon"><IconBackSVG />Back to home</Link>
            </div>
          </div>
          <div className="row">
            <div className={data.frontmatter.image ? `col-md-7` : 'col'}>
              <div className="mb-4">
                <MDXRenderer>{data.body}</MDXRenderer>
              </div>
              {data.frontmatter.tech &&
                <ul className="mb-4 tags" aria-label="project tech stack">
                  {data.frontmatter.tech.split(', ').map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              }
              {data.frontmatter.siteLink &&
                <div className="mb-1">
                  <a href={data.frontmatter.siteLink}>View website</a>
                </div>
              }
              {data.frontmatter.codeLink &&
                <div className="mb-1">
                  <a href={data.frontmatter.codeLink}>View code</a>
                </div>
              }
            </div>
            {data.frontmatter.image &&
              <div className="col-md-5 pt-4 pt-md-0">
                <GatsbyImage image={getImage(data.frontmatter.image)} alt="" />
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Project;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subTitle
        tech
        siteLink
        codeLink
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;