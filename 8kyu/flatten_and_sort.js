// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b)
}