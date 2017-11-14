import "./styles.css";
import React from "react";

export default class Results extends React.PureComponent {
  render() {
    const { results, selectedSectionsArray } = this.props.results;

    return (
      <div className="results">
        <h3>Results</h3>
        <div className="results__container">
          {selectedSectionsArray.map(selectedSection => (
            <div key={selectedSection} className="results__section">
              <div key={selectedSection} className="results__section-title">
                {selectedSection}
              </div>
              <div className="results__section-body">
                {!results[selectedSection].subsections &&
                  Object.keys(results[selectedSection]).map(question => (
                    <div key={question}>
                      {question} - <strong>{results[selectedSection][question]}</strong>
                    </div>
                  ))}
                {results[selectedSection].subsections && (
                  <div className="results__section-subsections">
                    {Object.keys(
                      results[selectedSection].subsections
                    ).map(subsection => (
                      <div key={subsection}>
                        {subsection}
                        {Object.keys(
                          results[selectedSection].subsections[subsection]
                        ).map(question => (
                          <div key={question}>
                            {question} -{" "}
                            <strong>
                              {
                                results[selectedSection].subsections[
                                  subsection
                                ][question]
                              }
                            </strong>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button onClick={this.props.reset}>Start again</button>
      </div>
    );
  }
}
