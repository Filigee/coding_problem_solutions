# https://www.codewars.com/kata/5966f6343c0702d1dc00004c

def give_change(amount): 
    changer = [0, 0, 0, 0, 0, 0]
    while amount > 0:
        if amount >= 100:
            changer[5] += 1
            amount -= 100
        elif amount >= 50:
            changer[4] += 1
            amount -= 50
        elif amount >= 20:
            changer[3] += 1
            amount -= 20
        elif amount >= 10:
            changer[2] += 1
            amount -= 10
        elif amount >= 5:
            changer[1] += 1
            amount -= 5
        else:
            changer[0] += 1
            amount -= 1
        
    return tuple(changer)