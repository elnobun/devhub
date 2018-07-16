/* A function that checks for an empty object and/or string */
const isEmpty = value =>
  // Check for undefined, null, object, and strings
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export default isEmpty;
