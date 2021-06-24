# https://leetcode.com/problems/number-of-good-pairs/
# tags - array
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        # num_pairs = 0
        # size = len(nums)
        # for i in range(size):
        #     for j in range(i+1, size):
        #         if nums[i] == nums[j]:
        #             num_pairs += 1
        # return num_pairs
        
        # identical_pairs = [(x,y) for i,x in enumerate(nums) for j,y in enumerate(nums) if x == y and i < j]
        # return len(identical_pairs)
        
        map = {}
        for num in nums:
            map[num] = map.get(num, 0) + 1
        num_pairs = 0
        for count in map.values():
            if count > 1:
                num_pairs += (count * (count-1) // 2)
        return num_pairs