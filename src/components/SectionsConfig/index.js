import "./styles.css";
import React, { PureComponent } from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import SectionsConfigControl from "./SectionsConfigControl";
import SECTIONS from "./../../constants/sections";

export default class SectionsConfig extends PureComponent {
  toggleSection = ({ target }) => {
    return target.checked
      ? this.props.addSection(target.name)
      : this.props.removeSection(target.name);
  };

  toggleQuestion = ({ section, value, checked }) => {
    return checked
      ? this.props.addQuestion({ section, question: value })
      : this.props.removeQuestion({ section, question: value });
  };

  toggleQuestionInSubsection = ({ section, value, checked, subsection }) => {
    return checked
      ? this.props.addQuestionInSubsection({
          section,
          question: value,
          subsection
        })
      : this.props.removeQuestionInSubsection({
          section,
          question: value,
          subsection
        });
  };

  toggleSubsection = ({ section, value, checked }) => {
    return checked
      ? this.props.addSubsection({ section, subsection: value })
      : this.props.removeSubsection({ section, subsection: value });
  };

  acceptQuestions = () => {
    this.props.start(this.props.sections.sections);
  };

  render() {
    const { sections, sectionsArray } = this.props.sections;

    return (
      <section className="questions-config">
        <h3>Let's test:</h3>
        <div>You can answer for all questions or set what you want.</div>
        <div className="questions-config__container">
          {sectionsArray.map(section => (
            <div key={section} className="questions-config__section">
              <div className="questions-config__title">
                <Checkbox
                  onChange={this.toggleSection}
                  name={section}
                  checked={Boolean(sections[section])}
                >
                  {section}
                </Checkbox>
              </div>
              {!SECTIONS[section].subsections &&
                SECTIONS[section].questions.map(question => (
                  <div key={question}>
                    <SectionsConfigControl
                      section={section}
                      onChange={this.toggleQuestion}
                      value={question}
                      checked={Boolean(
                        sections[section] &&
                          sections[section].questions.indexOf(question) !== -1
                      )}
                    >
                      {question}
                    </SectionsConfigControl>
                  </div>
                ))}
              {SECTIONS[section].subsections && (
                <div className="questions-config__subsections">
                  {SECTIONS[section].subsections.map(subsection => (
                    <div
                      key={subsection}
                      className="questions-config__subsection"
                    >
                      <div className="">
                        <SectionsConfigControl
                          value={subsection}
                          onChange={this.toggleSubsection}
                          section={section}
                          checked={Boolean(
                            sections[section] &&
                              sections[section].questions[subsection]
                          )}
                        >
                          {subsection}
                        </SectionsConfigControl>
                      </div>
                      {SECTIONS[section].questions[subsection].map(question => (
                        <div key={question}>
                          <SectionsConfigControl
                            section={section}
                            subsection={subsection}
                            onChange={this.toggleQuestionInSubsection}
                            value={question}
                            checked={Boolean(
                              sections[section] &&
                                sections[section].questions[subsection] &&
                                sections[section].questions[subsection].indexOf(
                                  question
                                ) !== -1
                            )}
                          >
                            {question}
                          </SectionsConfigControl>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button onClick={this.acceptQuestions}>Start</Button>
      </section>
    );
  }
}
