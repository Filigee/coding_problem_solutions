// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

const removeConsecutiveDuplicates = s => 
  s.split(" ").filter((word, i, array) => {
    return array[i] != array[i - 1]
  }).join(" ")
