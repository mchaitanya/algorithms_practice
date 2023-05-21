// https://leetcode.com/problems/sort-features-by-popularity/
// tags - string
/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function (features, responses) {
  // Map each feature to its index.
  const index = new Map();
  for (let i = 0; i < features.length; i++) {
    index.set(features[i], i);
  }

  // Map each feature to its popularity.
  const popularity = new Map(features.map((f) => [f, 0]));
  for (const response of responses) {
    const words = new Set(response.split(" "));
    for (const feature of features) {
      if (words.has(feature))
        popularity.set(feature, popularity.get(feature) + 1);
    }
  }

  return features.sort((f1, f2) => {
    const pop1 = popularity.get(f1),
      pop2 = popularity.get(f2);
    return pop1 === pop2 ? index.get(f1) - index.get(f2) : pop2 - pop1;
  });
};
