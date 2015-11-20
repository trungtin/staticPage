/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation(props) {
  let {isHome, pathName} = props;
  let mapRoundViewClassName = {
    '/': '',
    '/about': ' personal-view-open',
    '/portfolio': ' portfolio-view-open',
    '/blog': ' blog-view-open',
  }
  let mapSidebarClassName = {
    '/': '',
    '/about': ' personal-sidebar-open',
    '/portfolio': ' portfolio-sidebar-open',
    '/blog': ' blog-sidebar-open',
  }
  return (
    <div className="nav-container">
      { isHome &&
        <ul className="nav-list">
          <li className="nav-link" onMouseEnter={() => openView('personal-view-open')} onMouseLeave={closeView} >
            <a href="/about" onClick={Link.handleClick}>
              <h1 className="personal">Tran Trung Tin</h1>
              <div className="bottom-bar"></div>
            </a>
          </li>
          <li className="nav-link" onMouseEnter={() => openView('portfolio-view-open')} onMouseLeave={closeView} >
            <a href="/portfolio" onClick={Link.handleClick}>
              <h2 className="portfolio">Works</h2>
              <div className="bottom-bar"></div>
            </a>
          </li>
          <li className="nav-link" onMouseEnter={() => openView('blog-view-open')} onMouseLeave={closeView} >
            <a href="/blog" onClick={Link.handleClick}>
              <h2 className="blog">Blog</h2>
              <div className="bottom-bar"></div>
            </a>
          </li>
          <li className="nav-link" onMouseEnter={() => openView('contact-view-open')} onMouseLeave={closeView} >
            <a href="/#" onClick={Link.handleClick}>
              <h2 className="contact">Contact</h2>
              <div className="bottom-bar"></div>
            </a>
          </li>
        </ul>
      }
      <div className={'round-view' + mapRoundViewClassName[pathName]} onMouseEnter={(e) => {e.stopPropagation();}}>
        <div className="view-content personal-view">
          <h3>Name:&nbsp;</h3><em>Tran Trung Tin</em><br />
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
      <div className={'sidebar' + mapSidebarClassName[pathName]}>
        { !isHome && 
          <div className="nav">
            <div className="nav-link"><h2><a href="/" onClick={Link.handleClick}>&lt;&lt;</a></h2></div>
            <div className="nav-link"><h2><a href="/blog" onClick={Link.handleClick}>Blog</a></h2></div>
            <div className="nav-link"><h2><a href="/portfolio" onClick={Link.handleClick}>Portfolio</a></h2></div>
            <div className="nav-link"><h2><a href="/about" onClick={Link.handleClick}>About me</a></h2></div>
          </div>
        }
      </div>
    </div>
  );
}

function openView(className) {
  window.document.getElementsByClassName('round-view')[0].classList.add(className);
}

function closeView() {
  window.document.getElementsByClassName('round-view')[0].className = 'round-view';
}

export default Navigation;
