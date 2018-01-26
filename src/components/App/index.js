import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import ProgressContainer from '../../containers/ProgressContainer';

const Header = styled.header`
  background-color: black;
  padding: 20px;
  color: white;
`;

const App = () => (
  <React.Fragment>
    <Header>Kink-list</Header>
    <Container>
      <ProgressContainer />
    </Container>
  </React.Fragment>
);

export default App;
