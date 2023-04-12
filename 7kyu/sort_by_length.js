// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length)
  };