import React from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './IconButton.css';
import modsClasses from 'Util/modsClasses.js';

const MODS = ['icon'];

const IconButton = props => {
  const { className, icon, top, left, right, color, onClick, zIndex} = props;
  const classes = modsClasses(MODS, props, styles);
  return (
    <div className={classes} styleName="root"
      style={{
        top, left, right,
        color,
        zIndex,
      }} onClick={onClick}>
    </div>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
};

export default cssModules(IconButton, styles);
