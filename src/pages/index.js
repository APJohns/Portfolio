import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Card from '../components/Card';

import GithubSVG from '../images/svgs/github.inline.svg';
import CodepenSVG from '../images/svgs/codepen.inline.svg';
import LinkedinSVG from '../images/svgs/linkedin.inline.svg';

import './index.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// markup
const IndexPage = ({ data }) => {

  const navLinks = [
    {
      text: 'About',
      href: '#about'
    },
    {
      text: 'My Work',
      href: '#portfolio'
    }
  ];

  return (
    <Layout navLinks={navLinks} title="UX Frontend Developer" hasImage>
      <section className="about pb-5 pt-md-5" id="about">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-8">
              <h2 className="visual-h3">What I Do</h2>
              <p>
                Hey, I'm Ash. I'm a Massachusetts based Frontend Developer currently building out an accessible, react based design system/component library at Boston Scientific. My journey started at UMass Amherst where I get a B.S. in Informatics. While at university I taught programming over the summer, before moving on to work as a full time developer.
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="visual-h3">Contact Me</h2>
              <div className="row mb-3">
                <div className="col">
                  <p className="mb-0">Looking for a developer, or need a website? Shoot me an email!</p>
                  <a href="mailto:mail@ashpjohns.com">mail@ashpjohns.com</a>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <a className="icon-link" href="https://github.com/APJohns">
                    <span aria-hidden="true"><GithubSVG /></span>GitHub
                  </a>
                </div>
                <div className="col-auto">
                  <a className="icon-link" href="https://codepen.io/AshJohns">
                    <span aria-hidden="true"><CodepenSVG /></span>CodePen
                  </a>
                </div>
                <div className="col-auto">
                  <a className="icon-link" href="https://www.linkedin.com/in/ashley-p-johns">
                    <span aria-hidden="true"><LinkedinSVG /></span>LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio pb-5" id="portfolio">
        <div className="section-heading mb-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>My Work</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="row card-list">
            {data.allMdx.nodes.map((project, i) => (
              <li key={'project' + i} className="col-sm-6 col-md-4 col-lg-3 mb-5">
                <Card
                  title={project.frontmatter.title}
                  subTitle={project.frontmatter.subTitle}
                  path={`/projects/${project.slug}`}>
                    <GatsbyImage image={getImage(project.frontmatter.thumbnail)} alt="" />
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query homePage {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          subTitle
          date
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;