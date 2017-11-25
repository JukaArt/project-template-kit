import React from 'react';
import PropTypes from 'prop-types';
import Text from 'Components/Text';

const H2 = props => {
  const {text, msg, className} = props;
  return (
    <h2 className={className}>
      <Text
        size="28" weight="300"
        msg={msg} text={text}
      />
    </h2>
  );
};

H2.propTypes = {
  className: PropTypes.string,
};

export default H2;
