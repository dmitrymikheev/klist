import mirrorCreator from "mirror-creator";

export default mirrorCreator(
  [
    "START",
    "SELECT_SECTION",
    "SELECT_ANSWER",
    "NEXT_QUESTION"
  ],
  { prefix: "PROGRESS." }
);
