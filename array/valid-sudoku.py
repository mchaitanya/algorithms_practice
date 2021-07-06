# https://leetcode.com/problems/valid-sudoku/
# tags - array
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        def areDuplicates(arr):
            return len(arr) > len(set(arr))
        
        def excludeEmpty(arr):
            return [x for x in arr if x != '.']
        
        # Check rows.
        for row in board:
            if areDuplicates(excludeEmpty(row)):
                return False
        
        # Check columns.
        for j in range(9):
            column = [board[i][j] for i in range(9)]
            if areDuplicates(excludeEmpty(column)):
                return False
        
        # Check 3x3 sub-boxes.
        for rstart in range(0, 9, 3):
            for cstart in range(0, 9, 3):
                box = [board[rstart+i][cstart+j] for i in range(0,3) for j in range(0,3)]
                if areDuplicates(excludeEmpty(box)):
                    return False
        
        return True