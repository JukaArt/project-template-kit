import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Main.css';

class Main extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={className} styleName="root">
      </div>
    );
  }
}

Main.propTypes = {
  className: PropTypes.string,
};

export default CSSModules(Main, styles);
