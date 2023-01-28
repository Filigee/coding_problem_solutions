// https://www.codewars.com/kata/5716955a794d3013d00013f9

function theVar(string) {
    const alphabet = "~abcdefghijklmnopqrstuvwxyz"
    const s_array = string.split("+")
    return alphabet.indexOf(s_array[0]) + alphabet.indexOf(s_array[1])
  }