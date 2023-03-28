def once_repeat(arr):
    ans = 0
    for x in arr:
        ans = ans ^ x
    return ans

print(once_repeat([1,2,4,1,2]))

# 001 ^ 010 = 011
# 011 ^ 100 = 111
# 111 ^ 001 = 110
# 110 ^ 010 = 100
