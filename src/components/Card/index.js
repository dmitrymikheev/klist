import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../constants/colors';

const Wrapper = styled.section`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px;
`;
const Title = styled.header`
  padding: 10px;
  border-bottom: 1px solid ${COLORS.grey};
`;
const Subsections = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.grey};
  background: ${COLORS.lightGrey};

  & > * {
    width: 50%;
  }
`;
const Body = styled.div`
  padding: 10px;
`;

const Card = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.subsections && <Subsections>{props.subsections}</Subsections>}
    <Body>{props.children}</Body>
  </Wrapper>
);

Card.defaultProps = {
  subsections: null,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subsections: PropTypes.element,
  children: PropTypes.element.isRequired,
}

export default Card;
