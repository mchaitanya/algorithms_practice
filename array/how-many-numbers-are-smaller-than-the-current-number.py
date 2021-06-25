# https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
# tags - array
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        # result = []
        # for i, n1 in enumerate(nums):
        #     count = 0
        #     for j, n2 in enumerate(nums):
        #         if i != j and n2 < n1:
        #             count += 1
        #     result.append(count)
        # return result
        
        map = {}
        previous = None
        for i, current in enumerate(sorted(nums)):
            if previous is None:
                map[current] = 0
            elif current == previous:
                map[current] = map[previous]
            elif current > previous:
                map[current] = i
            previous = current
        
        return [map[num] for num in nums]
            
            
    
    