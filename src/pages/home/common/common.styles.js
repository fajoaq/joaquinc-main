import { textDropShadow } from "../../../styles/text/text-shadow";

const contentGridSharedStyles = `
  grid-column: 1;
  grid-row: 1;
  display: grid;
`;

const articleSharedStyles = `
  ${textDropShadow()}
`;

export { contentGridSharedStyles, articleSharedStyles };
