// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  return +numbers.filter(x => numbers.indexOf(x) == numbers.lastIndexOf(x)).join("")
}