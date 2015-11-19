/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Splash.scss';
import Link from '../Link';

function Splash() {
  return (
    <div className="container">
      <ul className="nav-list">
        <li className="nav-link" onMouseEnter={() => openView('personal-view-open')} onMouseLeave={closeView}>
          <h1 className="personal"><a href="/" onClick={Link.handleClick}>Tran Trung Tin</a></h1>
          <div className="bottom-bar"></div>
        </li>
        <li className="nav-link" onMouseEnter={() => openView('portfolio-view-open')} onMouseLeave={closeView}>
          <h2 className="portfolio"><a href="/about" onClick={Link.handleClick}>Works</a></h2>
          <div className="bottom-bar"></div>
        </li>
        <li className="nav-link" onMouseEnter={() => openView('blog-view-open')} onMouseLeave={closeView}>
          <h2 className="blog"><a href="/about" onClick={Link.handleClick}>Blog</a></h2>
          <div className="bottom-bar"></div>
        </li>
        <li className="nav-link" onMouseEnter={() => openView('contact-view-open')} onMouseLeave={closeView}>
          <h2 className="contact"><a href="/about" onClick={Link.handleClick}>Contact</a></h2>
          <div className="bottom-bar"></div>
        </li>
      </ul>
      <div className="round-view" onMouseEnter={(e) => {e.stopPropagation();}}>
        <div className="view-content personal-view">
          <h3>Name:&nbsp;</h3><em>Trần Trung Tín</em><br />
          <h3>Location:&nbsp;</h3><em>Ho Chi Minh city</em><br />
          <h3>Age:&nbsp;</h3><em>24</em><br />
        </div>
        <div className="view-content blog-view">
          <em>Coming Soon</em>
        </div>
        <div className="view-content portfolio-view">
          <h4>Years of Experience:&nbsp;</h4><em>0.5</em><br />
          <h4>Expertise:&nbsp;</h4><em>React + Node</em><br />
          <h4>Language:&nbsp;</h4><em>English</em><br /></div>
        <div className="view-content contact-view">
          <h4>Email:&nbsp;</h4><em> trungtindev@gmail.com</em><br />
          <h4>Homepage:&nbsp;</h4><em> trungtin.work</em><br />
          <h4>Phone:&nbsp;</h4><em> (+84) 93-736-2215</em><br /></div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
}

function openView(className) {
  window.document.getElementsByClassName('round-view')[0].classList.add(className);
}

function closeView() {
  window.document.getElementsByClassName('round-view')[0].className = 'round-view';
}

export default Splash;
