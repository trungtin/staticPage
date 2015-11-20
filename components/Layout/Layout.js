/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';

function Layout(props) {
	let {children, pathName} = props;
	let isHome = pathName === '/';
	return (
    <div className="Layout">
    	<Navigation isHome={isHome} pathName={pathName}/>
    	{ !isHome && children }
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
