import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Content.css';

@CSSModules(styles)
class Content extends Component {
  render() {
    const {className, children} = this.props;
    return (
      <main className={className} styleName="root">
        {children}
      </main>
    );
  }
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default connect()(Content);
