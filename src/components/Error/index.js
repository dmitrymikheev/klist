import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px 0;
  color: red;
`;

const Error = props => (props.children ? <Wrapper>{props.children}</Wrapper> : null);

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
