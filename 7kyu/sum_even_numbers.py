# https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/python

def sum_even_numbers(seq): 
    even_sum = 0
    for num in seq:
        if num % 2 == 0:
            even_sum += num
    return even_sum