import React, { useState } from 'react';

import './css/sideMenu.css';
import pdf from './doc/resume.pdf';

function SideMenu() {
  const [sideMenu, setSidemenu] = useState(false);

  const showSidemenu = () => {
    setSidemenu(!sideMenu);
  };

  return (
    <div>
      <button
        className={sideMenu ? 'navBar__sideMenu nav__menu' : 'navBar__sideMenu'}
      >
        <div className="icon__box" onClick={showSidemenu}>
          <div className="icon__box-inner"></div>
        </div>
      </button>

      <aside className={sideMenu ? 'sideMenu__items active' : 'sideMenu_items'}>
        <nav>
          <ol>
            <li className="sideMenu__about">
              <a href="/#about">1. About</a>
            </li>
            <li className="sideMenu__exp">
              <a href="/#work">2. Experience</a>
            </li>
            <li className="sideMenu__project">
              <a href="/#projects">3. Projects</a>
            </li>
            <li className="sideMenu__contact">
              <a href="/#contact">4. Contact</a>
            </li>
          </ol>
          <a
            className="sideMenu__cv"
            href={pdf}
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </nav>
      </aside>
      <div
        className={sideMenu ? 'nav__overlay blurActivate' : 'nav__overlay'}
      ></div>
    </div>
  );
}

export default SideMenu;
