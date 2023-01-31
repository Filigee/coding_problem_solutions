// https://www.codewars.com/kata/53d32bea2f2a21f666000256

function largest(n, array){
    return array.sort((a, b) => a - b).slice(array.length - n)
}