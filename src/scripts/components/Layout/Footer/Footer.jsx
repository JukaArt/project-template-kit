import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({className}) => (
  <footer className={className} styleName="root">
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Footer, styles);
