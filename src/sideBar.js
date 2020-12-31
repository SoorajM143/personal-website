import React from 'react';

import './css/sideBar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function SideBar() {
  return (
    <div className="sideBar">
      <ul className="sidebar__list">
        <li className="vertical-list">
          <a
            href="mailto:soorajmohan7@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <AlternateEmailIcon />
          </a>
        </li>
        <li className="vertical-list">
          <a
            href="https://github.com/SoorajM143"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="vertical-list">
          <a
            href="https://twitter.com/SoorajMohan9"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>
        <li className="vertical-list">
          <a
            href="https://www.linkedin.com/in/soorajmohan92/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li className="vertical-list">
          <InstagramIcon />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
