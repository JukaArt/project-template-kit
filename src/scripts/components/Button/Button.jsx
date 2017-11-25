import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import cssModules from 'react-css-modules';
import modsClasses from 'Util/modsClasses.js';
import styles from './Button.css';

import Text from 'Components/Text';

const MODS = ['color', 'shadow', 'hover', 'type', 'border', 'enable', 'radius', 'view', 'load', 'state'];

@injectIntl
@cssModules(styles, {allowMultiple: true})
class Button extends Component {
  render() {
    const {
      text, width, height,
      type, onClick, hover,
      msg, intl,
    } = this.props;
    const classes = modsClasses(MODS, this.props, styles);
    const hasHover = hover ? 'hasHover' : '';
    const msgText = msg ? intl.formatMessage({id: msg}) : '';
    return (
      <button className={classes} styleName={`root ${hasHover}`}
        type={type}
        style={{width: width, height: height}}
        onClick={onClick}
      >
        <div styleName="content">
          {
            msg ? msgText : text
          }
        </div>
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
