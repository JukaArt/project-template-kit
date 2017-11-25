import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import modsClasses from 'Util/modsClasses.js';
import styles from './Text.css';
import { FormattedMessage } from 'react-intl';

const MODS = [
  'size', 'color', 'type',
  'weight', 'letterSpacing',
  'display', 'lineHeight',
  'transform', 'align'
];

class Text extends Component {

  getInnerContent(children, text, msg) {
    if (children) {
      return children;
    } else if (text) {
      return text;
    } else if (msg) {
      return <FormattedMessage id={msg}/>;
    }
    return null;
  }

  render() {
    const { children, style, size, msg, text} = this.props;
    const classes = modsClasses(MODS, this.props, styles);
    const content = this.getInnerContent(children, text, msg);
    return (
      <div className={classes} style={style} styleName="root">
        {content}
      </div>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
};

export default cssModules(Text, styles);
