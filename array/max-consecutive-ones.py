# https://leetcode.com/problems/max-consecutive-ones/
# tags - array
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
#         count = 0
#         max_count = 0
#         num_digits = len(nums)
#         for i in range(num_digits):
#             if nums[i] == 0:
#                 continue
            
#             # We've seen a 1. Increment the count.
#             count += 1
#             if i+1 == num_digits or nums[i+1] == 0:
#                 max_count = max(max_count, count)
#                 # if count > max_count:
#                 #     max_count = count
#                 count = 0
#         return max_count
        
        last_zero_index = 0
        max_ones_count = 0
        for i, bit in enumerate([0] + nums + [0]):
            if bit == 0:
                max_ones_count = max(max_ones_count, i - last_zero_index - 1)
                last_zero_index = i
        return max_ones_count
            