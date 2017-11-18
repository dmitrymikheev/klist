import "./styles.css";
import React from "react";
import b_ from "bem-cn";

import { ANSWERS_KEYS } from "./../../constants/answers";
import Button from "./../Button";
import Card from "../Card";

export default class Results extends React.PureComponent {
  bemCn = b_("results");

  render() {
    const { results, selectedSectionsArray } = this.props.results;

    return (
      <div className={this.bemCn()}>
        <h3>Results</h3>
        <div className={this.bemCn("container")()}>
          {selectedSectionsArray.map(selectedSection => (
            <div key={selectedSection} className={this.bemCn("section")()}>
              <Card
                title={selectedSection}
                subsections={
                  results[selectedSection].subsections &&
                  Object.keys(
                    results[selectedSection].subsections
                  ).map(subsection => <div key={subsection}>{subsection}</div>)
                }
              >
                {!results[selectedSection].subsections &&
                  Object.keys(results[selectedSection]).map(question => (
                    <div key={question} className={this.bemCn("answer")()}>
                      {question} -{" "}
                      <strong>
                        {ANSWERS_KEYS[results[selectedSection][question]]}
                      </strong>
                    </div>
                  ))}
                {results[selectedSection].subsections && (
                  <div className={this.bemCn("section-subsections")()}>
                    {Object.keys(
                      results[selectedSection].subsections
                    ).map(subsection => (
                      <div
                        key={subsection}
                        className={this.bemCn("section-subsection")()}
                      >
                        {Object.keys(
                          results[selectedSection].subsections[subsection]
                        ).map(question => (
                          <div
                            key={question}
                            className={this.bemCn("answer")()}
                          >
                            {question} -{" "}
                            <strong>
                              {
                                ANSWERS_KEYS[
                                  results[selectedSection].subsections[
                                    subsection
                                  ][question]
                                ]
                              }
                            </strong>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
        <Button onClick={this.props.reset}>Start again</Button>
      </div>
    );
  }
}
