import React from 'react';
import './css/Body.css';

import pdf from './doc/resume.pdf';

import SideBar from './sideBar';
import MainContent from './mainContent';
import SideMenu from './sideMenu';
import logo from './images/Sooraj-logo.png';
import Fade from 'react-reveal';

function Body() {
  return (
    <div className="body">
      <div className="navBar">
        <header className="navBar__header">
          <Fade>
            <div className="navBar__logo">
              <a href="">
                <img src={logo}></img>
              </a>
            </div>
          </Fade>
          <nav className="navBar-nav">
            <div className="navBar__nav-about list-item">
              <a href="/#about">1. About</a>
            </div>
            <div className="navBar__nav-experience list-item">
              <a href="/#work">2. Experience</a>
            </div>
            <div className="navBar__nav-work list-item">
              <a href="/#projects">3. Work</a>
            </div>
            <div className="navBar__nav-contact list-item">
              <a href="/#contact">4. Contact</a>
            </div>
            <div className="navBar__nav-cv list-item">
              <a
                className="nav-cv"
                href={pdf}
                target="_blank"
                type="application/pdf"
              >
                Resume
              </a>
            </div>
          </nav>
          <SideMenu />
        </header>
      </div>

      <SideBar />

      <MainContent />
    </div>
  );
}

export default Body;
