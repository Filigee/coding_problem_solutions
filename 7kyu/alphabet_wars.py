# https://www.codewars.com/kata/59377c53e66267c8f6000027/train/python

def alphabet_war(fight):
    left_dictionary = {
        "w": 4,
        "p": 3,
        "b": 2,
        "s": 1
    }
    
    right_dictionary = {
        "m": 4,
        "q": 3,
        "d": 2,
        "z": 1
    }
    
    left_sum = 0
    right_sum = 0
    
    
    for char in fight:
        if char in left_dictionary:
            left_sum += left_dictionary[char]    
        elif char in right_dictionary:
            right_sum += right_dictionary[char]
            
    if(left_sum > right_sum):
        return "Left side wins!"
    elif(right_sum > left_sum):
        return "Right side wins!"
    else: 
        return "Let's fight again!"