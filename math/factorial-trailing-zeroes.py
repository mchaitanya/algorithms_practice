# https://leetcode.com/problems/factorial-trailing-zeroes/
# tags - number
class Solution:
    def trailingZeroes(self, n: int) -> int:
#         # Calculate n!. Count zeros from the right. - This gets accepted.
#         factorial = 1
#         for i in range(n):
#             factorial *= (i+1)
        
#         num_zeroes = 0
#         for c in reversed(str(factorial)):
#             if c != '0':
#                 break
#             num_zeroes += 1
#         return num_zeroes
        
        def times_divisible(number, factor):
            count = 0
            while (number % factor == 0):
                count += 1
                number //= factor
            return count
        
        times_divisible_two = 0
        times_divisible_five = 0
        for i in range(n):
            times_divisible_two += times_divisible(i+1, 2)
            times_divisible_five += times_divisible(i+1, 5)
        return min(times_divisible_two, times_divisible_five)
    
    