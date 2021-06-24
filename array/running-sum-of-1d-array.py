# https://leetcode.com/problems/running-sum-of-1d-array/
# tags - array
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        # rsum = []
        # for i in range(len(nums)):
        #     rsum.append(sum(nums[:i+1]))
        # return rsum
        
        # rsum = []
        # sum = 0
        # for num in nums:
        #     rsum.append(num + sum)
        #     sum += num
        # return rsum
    
        # if len(nums) <= 1:
        #     return nums
        # rsum = [nums[0]]
        # for num in nums[1:]:
        #     rsum.append(num + rsum[-1])
        # return rsum
        
        rsum = []
        for i, num in enumerate(nums):
            rsum.append(num + (rsum[-1] if i > 0 else 0))
        return rsum