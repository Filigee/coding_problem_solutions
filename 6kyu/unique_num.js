// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    return Number(arr.filter(num => arr.indexOf(num) == arr.lastIndexOf(num)))
}
  