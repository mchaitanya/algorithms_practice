# https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
# tags - number
from operator import mul
from functools import reduce

class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        # sum = 0
        # product = 1
        # for c in str(n):
        #     digit = int(c)
        #     sum += digit
        #     product *= digit
        # return product - sum
        
        # sum = 0
        # product = 1
        # while n > 0:
        #     digit = n % 10
        #     sum += digit
        #     product *= digit
        #     n //= 10
        # return product - sum
        
        digits = [int(c) for c in str(n)]
        return reduce(mul, digits) - sum(digits)
        