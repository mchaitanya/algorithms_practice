# https://leetcode.com/problems/count-items-matching-a-rule/
# tags - array
class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        # count = 0
        # for type, color, name in items:
        #     if ruleKey == 'type' and ruleValue == type:
        #         count += 1
        #     elif ruleKey == 'color' and ruleValue == color:
        #         count += 1
        #     elif ruleKey == 'name' and ruleValue == name:
        #         count += 1
        # return count
        
        # count = 0
        # for t, c, n in items:
        #     map = dict(type=t, color=c, name=n)
        #     if map[ruleKey] == ruleValue:
        #         count += 1
        # return count
        
        map = dict(type=0, color=1, name=2)
        count = 0
        for item in items:
            if item[map[ruleKey]] == ruleValue:
                count += 1
        return count
        # matches = [item[map[ruleKey]] == ruleValue for item in items]
        # return matches.count(True)