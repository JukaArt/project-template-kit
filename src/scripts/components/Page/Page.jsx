import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Page.css';

class Page extends Component {
  componentWillMount() {
    window.scroll(0, 0);
  }

  render() {
    const {children, styles, ...otherProps} = this.props;
    return (
      <div styleName="root" {...otherProps} >
        {children}
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Page, styles);
