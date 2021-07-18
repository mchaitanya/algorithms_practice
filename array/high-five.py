# https://leetcode.com/problems/high-five/
# tags - array
class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        map = {}
        for id, score in items:
            if id not in map:
                map[id] = []
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
            