import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ModalContainer extends Component {
  getModal() {
    const { modal } = this.props;
    switch (modal.name) {
      default:
        return <div></div>;
    }
  }
  render() {
    const {className} = this.props;
    const modal = this.getModal();
    return (
      <div className={className} style={{width: '100%', height: '100%'}}>
        { modal }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.root.modal,
});

ModalContainer.propTypes = {
  className: PropTypes.string,
};

export default connect(mapStateToProps)(ModalContainer);
