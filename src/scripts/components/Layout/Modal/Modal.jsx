import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Modal.css';

import ModalContainer from 'Containers/ModalContainer';

@CSSModules(styles, {allowMultiple: true})
class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className} = this.props;
    return (
      <div className={className}>
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
};

export default connect()(Modal);
