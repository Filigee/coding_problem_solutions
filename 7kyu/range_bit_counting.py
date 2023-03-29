# https://www.codewars.com/kata/58845748bd5733f1b300001f

def range_bit_count(a, b):
    # sum the amount of 1's in binary form within a range of numbers between a and b
    # a = 2, b = 6: [2,3,4,5,6] => [10, 11, 100, 101, 110] = 8
    
    array = []
    for x in range(a, b+1):
        array.append(bin(x))
    
    array = "".join(array).count("1")
    return array