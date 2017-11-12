import mirrorCreator from "mirror-creator";

export default mirrorCreator(
  [
    "ADD_SECTION",
    "REMOVE_SECTION",
    "ADD_QUESTION",
    "REMOVE_QUESTION",
    "ADD_SUBSECTION",
    "REMOVE_SUBSECTION",
    "ADD_QUESTION_IN_SUBSECTION",
    "REMOVE_QUESTION_IN_SUBSECTION"
  ],
  { prefix: "SECTION_CONFIG." }
);
