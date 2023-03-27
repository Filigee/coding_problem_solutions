# https://www.codewars.com/kata/59727ff285281a44e3000011/train/python

def band_name_generator(name):
    
    first_char = name[0]
    last_char = name[len(name) - 1]
    
    
    if first_char == last_char:
        return name[0].upper() + name[1:] + name[1:]
    else:
        return "The " + name[0].upper() + name[1:]