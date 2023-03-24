# https://www.codewars.com/kata/56cca888a9d0f25985000036/python

def candies_to_buy(amount_of_kids_invited):
    candies = 1
    for i in range(amount_of_kids_invited):
        more_candies = candies
        while candies % (i+1):
            candies += more_candies
    return candies