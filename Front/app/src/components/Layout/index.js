/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Header from './Header';
import Footer from './Footer';

import './style.scss';

/*
 * Component
 */
const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
    <Footer />
  </div>
);

/*
 * PropTypes
 */
Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

/*
 * Export
 */
export default Layout;
