import { createSelector } from "reselect";
import SECTIONS from "../constants/sections";

const sectionsSelector = state => state.sections;

export default createSelector(
  [sectionsSelector],
  sections => {
    const sectionsArray = Object.keys(SECTIONS);

    return {
      sectionsArray,
      sections
    };
  }
);
