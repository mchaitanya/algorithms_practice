# https://leetcode.com/problems/max-consecutive-ones-ii/
# tags - array
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
#         def find_max_ones_given(nums):
#             count = 0
#             max_count = 0
#             num_bits = len(nums)
#             for i in range(num_bits):
#                 if nums[i] == 0:
#                     continue
#                 count += 1
#                 if i+1 == num_bits or nums[i+1] == 0:
#                     max_count = max(max_count, count)
#                     count = 0
#             return max_count
        
#         max_ones = find_max_ones_given(nums)
#         for i, bit in enumerate(nums):
#             if bit == 0:
#                 flipped = nums[:i] + [1] + nums[i+1:]
#                 max_ones = max(max_ones, find_max_ones_given(flipped))
#         return max_ones
            
        # Each run is represented with the tuple (bit, count). 
        def find_runs(bits):
            runs = []
            start = 0
            num_bits = len(bits)
            for i in range(num_bits):
                if i+1 == num_bits or bits[i+1] != bits[i]:
                    runs.append((bits[i], i - start+1))
                    start = i+1
            return runs
                
        
        # Idea: find runs of ones and try to extend them to the left or right.
        max_count = 1 # Sequence will be at least one bit long.
        runs = find_runs(nums)
        num_runs = len(runs)
        for i in range(num_runs):
            bit, count = runs[i]
            if bit == 0:
                continue
            
            # Try to extend to the left.
            lcount = count
            if i-1 >= 0:
                lcount += 1
                if runs[i-1][1] == 1:
                    lcount += (0 if i-2 < 0 else runs[i-2][1])

            # Try to extend to the right.
            rcount = count
            if i+1 < num_runs:
                rcount += 1
                if runs[i+1][1] == 1:
                    rcount += (0 if i+2 >= num_runs else runs[i+2][1])
            
            max_count = max(max_count, lcount, rcount)
        
        return max_count