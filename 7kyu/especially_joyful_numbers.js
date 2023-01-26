// https://www.codewars.com/kata/570523c146edc287a50014b1

function numberJoy(n) {
    let sum_of_digits = n.toString().split('').reduce((sum, digit) => sum + +digit, 0)
    const sum_reversed = sum_of_digits.toString().split("").reverse().join("")
    
    return sum_of_digits * sum_reversed == n
}