import * as React from 'react';
import Helmet from 'react-helmet';

import '../styles/bootstrap/bootstrap-reboot.min.css';
import '../styles/bootstrap/bootstrap-grid.min.css';
import '../styles/bootstrap/bootstrap-utilities.min.css';
import '../styles.scss';

import logo from '../images/svgs/logo.svg';
import LogoSVG from '../images/svgs/logo.inline.svg';
import SunSVG from '../images/svgs/sun.inline.svg';
import MoonSVG from '../images/svgs/moon.inline.svg';
import GithubSVG from '../images/svgs/github.inline.svg';
import CodepenSVG from '../images/svgs/codepen.inline.svg';
import LinkedinSVG from '../images/svgs/linkedin.inline.svg';
import social from '../images/social.png';
import { StaticImage } from 'gatsby-plugin-image';

const Layout = (props) => {

  const [theme, setTheme] = React.useState('light');
  const themeCheckboxRef = React.useRef(null);

  React.useEffect(() => {
    // Check session storage
    if (sessionStorage.getItem('theme')) {
      themeCheckboxRef.current.checked = sessionStorage.getItem('theme') === 'dark';
      setTheme(sessionStorage.getItem('theme'));
    } else {
      // If none, then set toggle state to OS theme
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      themeCheckboxRef.current.checked = prefersDarkScheme.matches;
      sessionStorage.setItem('theme', prefersDarkScheme.matches ? 'dark' : 'light');
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
    sessionStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
  }

  return (
    <>
      <Helmet htmlAttributes={{
        class: `theme-${theme}`
      }}>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Ash Johns is a UX / Front End Developer based in Massachusetts. Find out why Ash is the right developer for your team or project." />
        {/* Social meta */}
        <meta property="og:title" content="Ash Johns Portfolio" />
        <meta property="og:description" content="Find out why Ash is the right developer for your team or project." />
        <meta property="og:image" content={social} />
        <meta property="og:url" content="https://ashpjohns.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Ash Johns" />
        <meta name="twitter:image:alt" content="Ash Johns" />

        <title>Ash Johns</title>
        <link rel='icon' type='image/svg+xml' href={logo} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <header className="site-header pt-4 pb-4 pb-md-5">
        <div className="container">
          <nav className="row justify-content-between align-items-center mb-4 mb-md-5">
            <div className="col-auto">
              <a className="logo" href="/" aria-label="Home page">
                <span aria-hidden="true">
                  <LogoSVG />
                </span>
                <div className="logo-text" aria-hidden="true">Ash<br />Johns</div>
              </a>
            </div>
            {props.navLinks &&
              <div className="col-auto ms-auto nav-links">
                <div className="row">
                  {props.navLinks.map(link => (
                    <div key={link.href} className="col-auto">
                      <a href={link.href}>{ link.text }</a>
                    </div>
                  ))}
                </div>
              </div>
            }
            <div className="col-auto">
              <div className="switch">
                <input id="darkModeToggle" type="checkbox" onChange={toggleTheme} ref={themeCheckboxRef} />
                <label id="darkModeToggleLabel" htmlFor="darkModeToggle" aria-label="Dark mode">
                  <SunSVG />
                  <MoonSVG />
                </label>
              </div>
            </div>
          </nav>
          <div className={'row align-items-center ' + (props.hasImage ? 'my-4 my-md-5' : 'my-2')}>
            <div className="col-md-8">
              <h1>{ props.title }</h1>
              {props.subTitle && <p className="sub-title">{ props.subTitle }</p>}
            </div>
            {props.hasImage &&
              <div className="col-md-4 d-none d-md-block">
                <StaticImage src="../images/hero.svg" alt="" className="hero-image"/>
              </div>
            }
          </div>
        </div>
      </header>
      <main id="mainContent">
        { props.children }
      </main>
      <footer className="site-footer py-4">
        <div className="container">
          <div className="row align-items-end">
            <div className="col text-center text-md-start">
              <div className="row mb-3">
                <div className="col">
                  <div>Ashley Johns</div>
                  <a href="mailto:mail@ashpjohns.com">mail@ashpjohns.com</a>
                </div>
              </div>
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-auto">
                  <a href="https://github.com/APJohns" className="icon-link" aria-label="GitHub">
                    <GithubSVG />
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://codepen.io/AshJohns" className="icon-link" aria-label="Codepen">
                    <CodepenSVG />
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://www.linkedin.com/in/ashley-p-johns" className="icon-link" aria-label="LinkedIn">
                    <LinkedinSVG />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-auto ms-auto text-center text-md-end">
                <small>
                  Copyright &copy; 2020 -
                  <span>{new Date().getFullYear()}</span>
                  Ashley Johns. All rights reserved.
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;