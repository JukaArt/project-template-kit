import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

import Modal from './Modal';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class Layout extends Component {
  render() {
    const {className, children} = this.props;
    return (
      <div className={className} styleName="root">
        <Header styleName="header" />
        <Content styleName="content">
          {children}
        </Content>
        <Footer styleName="footer" />
        <Modal/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default CSSModules(Layout, styles);
