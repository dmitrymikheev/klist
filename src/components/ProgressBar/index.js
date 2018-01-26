import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Wrapper = styled.div`
  position: relative;
  height: 2px;
`;
const ProgressLine = styled.div`
  height: 100%;
  background: ${COLORS.blue};
  transition: width 0.2s ease;
`;

const ProgressBar = props => (
  <Wrapper>
    <ProgressLine style={{ width: `${props.progressValue}%` }} />
  </Wrapper>
);

ProgressBar.propTypes = {
  progressValue: PropTypes.number.isRequired,
};

export default ProgressBar;
