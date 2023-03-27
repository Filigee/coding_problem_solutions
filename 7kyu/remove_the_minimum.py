# https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python

def remove_smallest(numbers):
    # remove the smallest number without altering the array
    
    if len(numbers) == 0: return []

    index_to_remove = 0
    current_lowest = numbers[0]
    
    for i, num in enumerate(numbers):
        if num < current_lowest:
            current_lowest = num
            index_to_remove = i
    
    no_mutations = []
    for i, num in enumerate(numbers):
        if i == index_to_remove:
            continue
        else: 
            no_mutations.append(num)
    
    return no_mutations
