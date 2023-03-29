# https://www.codewars.com/kata/555de49a04b7d1c13c00000e/train/python

import math
def add(*args):
    # list of numbers and the elements within will be divided by their index, then summed togethr, floats should be rounded up 
    # [1, 4, -6, 20] => 1 + 4/2 = 2 + -6 / 3 = -2 + 20 / 4 = 5 => 1 + 2 - 2 + 5 = 6
    

    l = list(args)
    if len(l) == 0: return 0
    
    sum = 0
    
    for i, num in enumerate(l):
        # divide num by i + 1
        sum += num / (i+1)
        
    
    return round(sum)