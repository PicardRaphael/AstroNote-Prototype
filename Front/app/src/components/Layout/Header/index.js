/*
 * Package Import
 */
import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Local Import
 */
import './style.scss';

/*
 * Component
 */
const Header = () => (
  <header className="header">
    <Link className="header-link" to={'/'}>
      AstroNote
    </Link>
  </header>
);

/*
 * Export
 */
export default Header;
