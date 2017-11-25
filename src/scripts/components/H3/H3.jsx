import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Text from 'Components/Text';

class H3 extends Component {
  render() {
    const {className} = this.props;
    return (
      <h3 className={className}>
        <Text
          size="18" weight="700"
          {...this.props}
        />
      </h3>
    );
  }
}

H3.propTypes = {
  className: PropTypes.string,
};

export default H3;
