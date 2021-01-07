import React, { useState } from 'react';

import './css/mainContent.css';
import image from './images/sooraj.jpg';
import Qatar from './images/Qatar.png';
import Walmart from './images/Walmart.png';
import LaunchIcon from '@material-ui/icons/Launch';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fade from 'react-reveal';
import CopyrightIcon from '@material-ui/icons/Copyright';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function MainContent() {
  const [jobTab1, setJobTab1] = useState(true);
  const [jobDiv1, setJobDiv1] = useState(true);
  const [jobTab2, setJobTab2] = useState(false);
  const [jobDiv2, setJobDiv2] = useState(false);
  const activateJobTab = (id) => {
    if (id.currentTarget.id === 'tab__01') {
      if (!jobTab1) {
        setJobTab1(true);
        setJobDiv1(true);
        setJobTab2(false);
        setJobDiv2(false);
      }
    } else if (id.currentTarget.id === 'tab__02') {
      if (!jobTab2) {
        setJobTab2(true);
        setJobDiv2(true);
        setJobTab1(false);
        setJobDiv1(false);
      }
    }
  };

  return (
    <div id="content">
      <main className="main__content">
        <section id="intro" className="main__content-intro">
          <div className="main__content__intro-1">
            <h4>Hi, I'm</h4>
          </div>
          <div className="main__content__intro-2">
            <h2>Sooraj Mohan</h2>
            <h3>I Build things that live on the web.</h3>
          </div>
          <div className="main__content__intro-3">
            <p>
              I'm a software engineer currently based in Limerick, Ireland
              specilised in buliding sleek, responsive and interactive UI for
              Apps and websites. Occationally building stuff in the back-end as
              well.
            </p>
          </div>
          <div className="main__content_intro-mail">
            <a className="intro-mail" href="mailto:soorajmohan7@gmail.com">
              Get in Touch
            </a>
          </div>
        </section>
        <Fade>
          <section id="about" className="section__about">
            <h2 className="number_heading">About Me</h2>
            <div className="inner_content">
              <div className="about__content">
                <div>
                  <p>
                    Hello.! I'm Sooraj, a software developer currently based
                    outof Limerick, Ireland.
                  </p>
                  <p>
                    I love creating websites, applications and other things that
                    live on the internet. My goal always has been to built stuff
                    that is simple and user friendly.
                  </p>
                  <p>
                    I graduated from&nbsp;
                    <a
                      href="https://www.cusat.ac.in/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Cochin University
                    </a>
                    &nbsp;with a bachelors degree in engineering. Following
                    which I worked at&nbsp;
                    <a
                      href="https://www.wipro.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Wipro
                    </a>
                    &nbsp;as a software developer for clients such as&nbsp;
                    <a
                      href="https://www.walmart.com.mx/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Walmart Mexico,&nbsp;
                    </a>
                    <a
                      href="https://www.qatarairways.com/en-ie/homepage.html"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Qatar Airways,&nbsp;
                    </a>
                    <a href="https://www.easyjet.com/en">easyJet.</a>
                    &nbsp;Lately, I graduated from&nbsp;
                    <a
                      href="https://www.ul.ie/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      University of Limerick
                    </a>
                    &nbsp; with a Masters degree in International Management and
                    Global Business.
                  </p>
                  <p>My Tech Stack:</p>
                </div>
                <ul className="skill__list">
                  <li>Javascript (ES6+)</li>
                  <li>HTML / (S)CSS</li>
                  <li>React</li>
                  <li>Openlayers</li>
                  <li>Node.js</li>
                  <li>jQuery</li>
                  <li>Java</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="about_image">
                <div className="wrapper">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section id="work" className="section__work">
            <h2 className="number_heading">Where I've Worked</h2>
            <div class="inner_section">
              <ul aria-label="Job tabs" className="work__jobTabs">
                <li>
                  <button
                    id="tab__01"
                    className={`job__tabs${jobTab1 ? ' selected' : ''}`}
                    onClick={activateJobTab}
                  >
                    <span>Wipro</span>
                  </button>
                </li>
                <li>
                  <button
                    id="tab__02"
                    className={`job__tabs${jobTab2 ? ' selected' : ''}`}
                    onClick={activateJobTab}
                  >
                    <span>IEEE</span>
                  </button>
                </li>
              </ul>
              <Fade>
                <div
                  id="panel__01"
                  className={`jobs__panel-01${jobDiv1 ? '' : ' inactive'}`}
                >
                  <h3>
                    <span>Software Engineer</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.wipro.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Wipro
                      </a>
                    </span>
                  </h3>
                  <p className="work__length">March 2017 - August 2019</p>
                  <div>
                    <ul>
                      <li>
                        Part of the large-scale Agile development team (TOPS –
                        Total Operations System) for clients: Qatar Airways and
                        EasyJet Airline.
                      </li>
                      <li>
                        Designed sleek front-end pages with React in ES6 with
                        Babel and developed Client-specific custom styling
                        written CSS/SASS.
                      </li>
                      <li>
                        Revamped and optimised API -based back end written in
                        Java with Spring using SQL, PostgreSQL handling over
                        200+ API’s and 25 landing pages.
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <span>Project Engineer</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.wipro.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Wipro
                      </a>
                    </span>
                  </h3>
                  <p className="work__length">September 2015 - March 2017</p>
                  <div>
                    <ul>
                      <li>
                        Maintained websites for client Walmart Mexico and
                        Implemented new UI with Bootstrap and JavaScript to
                        improve UX and system.
                      </li>
                      <li>
                        Communicate with multi-disciplinary teams of engineers,
                        designers, producers, and clients on a daily basis
                      </li>
                      <li>
                        Facilitated the design of over 40% of the UI test cases
                        for various change requests and enhancements
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div
                  id="panel__02"
                  className={`jobs__panel-02${jobDiv2 ? '' : ' inactive'}`}
                >
                  <h3>
                    <span>Volunteer - Web Master</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.facebook.com/ieeetkmit/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        IEEE
                      </a>
                    </span>
                  </h3>
                  <p className="work__length"> May 2013 - May 2015</p>
                  <div>
                    <ul>
                      <li>
                        Developed and maintained the website for the IEEE
                        student branch of the University using Vanilla JS and
                        HTML
                      </li>
                      <li>
                        Designed posters and logos for forthecoming events
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
            </div>
          </section>
        </Fade>
        <Fade>
          <section id="projects">
            <h2 className="number_heading">Few Things I have Worked on</h2>
            <div>
              <div className="section__project-01">
                <div className="project__content">
                  <p className="project__overline">Featured Project</p>
                  <h3 className="project__title">TOPS</h3>
                  <div className="project__description">
                    <p>
                      TOPS or Total OPeratipons System - A complete Airline
                      management tool developed by Wipro in patnership with
                      Qatar Airways. TOPS was later purchased by leading
                      airlines such as easyJet and Jetblue.
                    </p>
                  </div>
                  <ul className="project__tech-list">
                    <li>Openlayers</li>
                    <li>GoogleMaps API</li>
                    <li>Javascript</li>
                    <li>Java</li>
                  </ul>
                  <div className="project__link">
                    <a
                      href="https://tops.qatarairways.com/en-ie/homepage.html"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <LaunchIcon />
                    </a>
                  </div>
                </div>
                <div className="project__image">
                  <a
                    href="https://tops.qatarairways.com/en-ie/homepage.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="project__img-wrapper">
                      <img src={Qatar} className="project__img" alt=""></img>
                    </div>
                  </a>
                </div>
              </div>
              <div className="section__project-01">
                <div className="project__content">
                  <p className="project__overline">Featured Project</p>
                  <h3 className="project__title">Walmart Mexico</h3>
                  <div className="project__description">
                    <p>
                      An E-commerce website for the retail giant Walmart for
                      their Mexico business.
                    </p>
                  </div>
                  <ul className="project__tech-list">
                    <li>React</li>
                    <li>Java </li>
                    <li>Spring MVC</li>
                  </ul>
                  <div className="project__link">
                    <a
                      href="https://www.walmart.com.mx/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <LaunchIcon />
                    </a>
                  </div>
                </div>
                <div className="project__image">
                  <a
                    href="https://www.walmart.com.mx/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="project__img-wrapper">
                      <img src={Walmart} className="project__img" alt=""></img>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section className="other__projects">
            <h2>Other Projects</h2>
            <div className="projects_grid">
              <div className="projects">
                <div className="project__inner">
                  <header>
                    <div className="project__top">
                      <div className="folder">
                        <AssignmentIcon />
                      </div>
                      <div className="project__links">
                        <a
                          href="https://github.com/SoorajM143/Music-player"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                    <h3 className="project__title">
                      A web player using Spotify API
                    </h3>
                    <div className="project__description">
                      <p>
                        Built a webplayer app using Spotify's public API
                        fetching users favoutrite playlists and songs
                      </p>
                    </div>
                  </header>
                  <footer>
                    <ul className="project__tech-list">
                      <li>React</li>
                      <li>Spotify API</li>
                      <li>Firebase</li>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="projects">
                <div className="project__inner">
                  <header>
                    <div className="project__top">
                      <div className="folder">
                        <AssignmentIcon />
                      </div>
                      <div className="project__links">
                        <a
                          href="https://github.com/SoorajM143/personal-website"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                    <h3 className="project__title">
                      Personal Portfolio Website
                    </h3>
                    <div className="project__description">
                      <p>
                        Built a personal portfolio website from scratch using
                        React, Material UI
                      </p>
                    </div>
                  </header>
                  <footer>
                    <ul className="project__tech-list">
                      <li>React</li>
                      <li>Material UI</li>
                      <li>Netlify</li>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="projects">
                <div className="project__inner">
                  <header>
                    <div className="project__top">
                      <div className="folder">
                        <AssignmentIcon />
                      </div>
                      <div className="project__links">
                        <a
                          href="https://github.com/SoorajM143/personal-spotify-profile"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    </div>
                    <h3 className="project__title">Personal Spotify Profile</h3>
                    <div className="project__description">
                      <p>
                        A visualising of personal spotify data using Spotify API
                      </p>
                    </div>
                  </header>
                  <footer>
                    <ul className="project__tech-list">
                      <li>React</li>
                      <li>Spotify API</li>
                      <li>Material UI</li>
                    </ul>
                  </footer>
                </div>
              </div>
            </div>
          </section>
        </Fade>
        <Fade>
          <section id="contact" className="contact__me">
            <h2 className="contact">Contact</h2>
            <h2 className="contact_title">Get In Touch</h2>
            <p>
              I' am currently seeking full-time Front-end roles. If my profile
              interests you, or you just want to say Hi. Contact me my clicking
              below, Ciao..!
            </p>
            <a
              className="email__link"
              href="mailto:soorajmohan7@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              E-mail me
            </a>
          </section>
        </Fade>
      </main>
      <footer className="footer">
        <div className="footer__responsive">
          <ul>
            <li>
              <a
                href="mailto:soorajmohan7@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <AlternateEmailIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soorajmohan92/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SoorajMohan9"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SoorajM143"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <InstagramIcon />
            </li>
          </ul>
        </div>
        <div className="footer__normal">
          <CopyrightIcon /> <p>Sooraj Mohan</p>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
