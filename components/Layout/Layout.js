/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Splash from '../Splash';

function Layout(props) {
	let {children, pathName} = props;
	if (pathName === '/') {
		return (
	    <div className="Layout">
	      <Splash />
	    </div>
	  );
	}
  return (
    <div className="Layout">
      <Navigation />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
