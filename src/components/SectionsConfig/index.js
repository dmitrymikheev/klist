import "./styles.css";
import React, { PureComponent } from "react";
import b_ from "bem-cn";

import SECTIONS from "./../../constants/sections";

import Button from "../Button";
import Checkbox from "../Checkbox";
import SectionsConfigControl from "./SectionsConfigControl";
import Card from "../Card";

export default class SectionsConfig extends PureComponent {
  b_ = b_("questions-config");
  state = {
    showConfig: false
  };

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

  toggleConfig = () => {
    this.setState({
      showConfig: !this.state.showConfig
    });
  };

  render() {
    const { sections, sectionsArray } = this.props.sections;

    return (
      <section className={this.b_()}>
        <p>
          You can answer for all questions or set what you want.{" "}
          <Button onClick={this.toggleConfig}>Select questions</Button>
        </p>
        <div
          ref="container"
          className={this.b_("container", { hidden: !this.state.showConfig })()}
        >
          {sectionsArray.map(section => (
            <div
              key={section}
              className={this.b_("section", {
                large: Boolean(SECTIONS[section].subsections)
              })()}
            >
              <Card>
                <h3 className={this.b_("title")()}>
                  <Checkbox
                    onChange={this.toggleSection}
                    name={section}
                    checked={Boolean(sections[section])}
                  >
                    {section}
                  </Checkbox>
                </h3>
                {!SECTIONS[section].subsections &&
                  SECTIONS[section].questions.map(question => (
                    <div key={question} className={this.b_("question")()}>
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
                  <div className={this.b_("subsections")()}>
                    {SECTIONS[section].subsections.map(subsection => (
                      <div key={subsection} className={this.b_("subsection")()}>
                        <div className={this.b_("subsection-title")()}>
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
                        {SECTIONS[section].questions[
                          subsection
                        ].map(question => (
                          <div key={question} className={this.b_("question")()}>
                            <SectionsConfigControl
                              section={section}
                              subsection={subsection}
                              onChange={this.toggleQuestionInSubsection}
                              value={question}
                              checked={Boolean(
                                sections[section] &&
                                  sections[section].questions[subsection] &&
                                  sections[section].questions[
                                    subsection
                                  ].indexOf(question) !== -1
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
              </Card>
            </div>
          ))}
        </div>
        <Button onClick={this.acceptQuestions}>Start</Button>
      </section>
    );
  }
}
