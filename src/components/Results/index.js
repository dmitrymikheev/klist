import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ANSWERS_KEYS } from './../../constants/answers';
import Button from './../Button';
import Card from '../Card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Section = styled.div`
  width: 33.333%;
  padding: 5px;
  margin: 10px 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;
const Subsections = styled.div`
  display: flex;
`;
const Subsection = styled.div`
  width: 50%;
`;
const Answer = styled.div`
  margin-bottom: 10px;
`;

export default class Results extends React.PureComponent {
  render() {
    const { results, selectedSectionsArray } = this.props.results;

    return (
      <React.Fragment>
        <h3>Results</h3>
        <Container>
          {selectedSectionsArray.map(selectedSection => (
            <Section key={selectedSection}>
              <Card
                title={selectedSection}
                subsections={
                  results[selectedSection].subsections &&
                  Object.keys(results[selectedSection].subsections).map(subsection => (
                    <div key={subsection}>{subsection}</div>
                  ))
                }
              >
                {!results[selectedSection].subsections &&
                  Object.keys(results[selectedSection]).map(question => (
                    <Answer key={question}>
                      {question} -{' '}
                      <strong>{ANSWERS_KEYS[results[selectedSection][question]]}</strong>
                    </Answer>
                  ))}
                {results[selectedSection].subsections && (
                  <Subsections>
                    {Object.keys(results[selectedSection].subsections).map(subsection => (
                      <Subsection key={subsection}>
                        {Object.keys(results[selectedSection].subsections[subsection]).map(question => (
                          <Answer key={question}>
                            {question} -{' '}
                            <strong>
                              {
                                  ANSWERS_KEYS[
                                    results[selectedSection].subsections[subsection][question]
                                  ]
                                }
                            </strong>
                          </Answer>
                          ))}
                      </Subsection>
                    ))}
                  </Subsections>
                )}
              </Card>
            </Section>
          ))}
        </Container>
        <Button onClick={this.props.reset}>Start again</Button>
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};
