// https://leetcode.com/problems/html-entity-parser
// tags - string
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  const entityMap = new Map([
    ["&quot;", '"'],
    ["&apos;", "'"],
    ["&amp;", "&"],
    ["&gt;", ">"],
    ["&lt;", "<"],
    ["&frasl;", "/"],
  ]);

  let parsed = "";
  for (let i = 0, maybeEntity = ""; i < text.length; i++) {
    if (maybeEntity.length > 0) {
      // Reset the entity if another '&' is seen before a ';'.
      if (text[i] === "&") {
        parsed += maybeEntity;
        maybeEntity = "";
      }
      maybeEntity += text[i];
      if (i === text.length - 1 || text[i] === ";") {
        parsed += entityMap.get(maybeEntity) || maybeEntity;
        maybeEntity = "";
      }
    } else if (text[i] === "&") {
      maybeEntity = "&";
    } else {
      parsed += text[i];
    }
  }
  return parsed;
};
