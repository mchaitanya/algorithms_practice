# https://leetcode.com/problems/high-five/
# tags - array
from collections import defaultdict
class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        # map = {}
        map = defaultdict(list)
        for id, score in items:
            # if id not in map:
            #     map[id] = []
            # map[id].append(score)
            # # Try the `setdefault` dictionary method.
            # scores = map.setdefault(id, [])
            # scores.append(score)
            # Use a defaultdict.
            map[id].append(score)
            
        result = []
        for id in sorted(map.keys()):
            scores = map[id]
            # Sort the scores.
            scores.sort(reverse=True)
            # Pick out the top 5 and calculate the average.
            top_five_average = sum(scores[0:5]) // 5
            # Store the result.
            result.append([id, top_five_average])
        return result
            