// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
// tags - array
/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  if (skill.length === 2) return skill[0] * skill[1];

  // Sort skill.
  skill.sort((s1, s2) => s1 - s2);

  const teamSkill = skill[0] + skill[skill.length - 1];
  let totalChemistry = skill[0] * skill[skill.length - 1];
  for (let left = 1, right = skill.length - 2; left < right; left++, right--) {
    if (skill[left] + skill[right] !== teamSkill) return -1;
    totalChemistry += skill[left] * skill[right];
  }
  return totalChemistry;
};
