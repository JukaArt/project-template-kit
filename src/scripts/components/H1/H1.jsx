import React from 'react';
import cssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import modsClasses from 'Util/modsClasses.js';
import styles from './H1.css';

const MODS = ['type'];

import Text from 'Components/Text';

const H1 = props => {
  const {text, msg, className} = props;
  const classes = modsClasses(MODS, props, styles);
  return (
    <h1 className={classes} styleName="root">
      <Text
        size="36"
        weight="300"
        style={{lineHeight: '36px'}}
        {...props}
      />
    </h1>
  );
};

H1.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default cssModules(H1, styles);
