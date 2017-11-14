import React from "react";

export default class Results extends React.PureComponent {
  render() {
    const { results, selectedSectionsArray } = this.props.results;
    console.log(this.props);

    return (
      <div>
        Results
        <div>
          {selectedSectionsArray.map(selectedSection => (
            <div key={selectedSection}>
              <div key={selectedSection}>{selectedSection}</div>
              {!results[selectedSection].subsections &&
                Object.keys(results[selectedSection]).map(question => (
                  <div key={question}>
                    {question} - {results[selectedSection][question]}
                  </div>
                ))}
              {results[selectedSection].subsections &&
                Object.keys(
                  results[selectedSection].subsections
                ).map(subsection => (
                  <div key={subsection}>
                    {subsection}
                    {Object.keys(
                      results[selectedSection].subsections[subsection]
                    ).map(question => (
                      <div key={question}>
                        {question} - {results[selectedSection].subsections[subsection][question]}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
