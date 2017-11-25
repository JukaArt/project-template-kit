import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Header.css';
import { Link } from 'react-router-dom';

@CSSModules(styles)
class Header extends Component {

  render() {
    const {className} = this.props;
    return (
      <header
        className={className}
        styleName="root"
      >
      </header>
    );
  }
}


Header.propTypes = {
  className: PropTypes.string,
};

export default connect()(Header);
