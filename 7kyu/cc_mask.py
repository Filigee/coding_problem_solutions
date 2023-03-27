# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

# return masked string
def maskify(cc):
    # all characters except the last 4 in cc should be "#"
    
    if len(cc) > 4:
        l = len(cc) - 4
        lst_four = cc[l:]
        return "#" * l + lst_four
    else: 
        return cc