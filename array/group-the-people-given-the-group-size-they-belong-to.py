# https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
# tags - array
from collections import defaultdict
class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
#         map = {} # Maps each size to a list of groups
#         for person, size in enumerate(groupSizes):
#             if size not in map:
#                 map[size] = []
            
#             groups = map.get(size)
#             if not groups or len(groups[-1]) == size:
#                 groups.append([])
#             groups[-1].append(person)
        
#         return [sub_group for group in map.values() for sub_group in group]
        
        map = defaultdict(list)
        for person, size in enumerate(groupSizes): 
            map[size].append(person)
        
        groups = []
        for size, persons in map.items():
            for i in range(0, len(persons), size):
                groups.append(persons[i:i+size])
        return groups