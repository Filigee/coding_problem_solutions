// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

// Solution 1

function nextBigger(n) {
    if (n === reverseSortDigits(n)) return -1
  
    let nSorted = sortDigits(n)
    
    while (true) {
      n += 1
      if (sortDigits(n) === nSorted) return n
    }
  }
  
  function splitDigits(d) {
    return String(d).split('')
  }
  
  function sortDigits(d) {
    return Number(splitDigits(d).sort().join(''))
  }
  
  function reverseSortDigits(d) {
    return Number(splitDigits(d).sort().reverse().join(''))
  }

  // Solution 2

  function nextBiggerTwo(n){
    var arr = n.toString().split("").reverse();
    var i = arr.findIndex((d, _i) => d < arr[_i-1]);
    if (i === -1) { return -1; }
    var subarr = arr.slice(0, i);
    var j = subarr.findIndex((d) => {d > arr[i]});
    subarr.splice(j, 1, arr[i]);
    console.log(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""))
    return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
  }

  console.log(nextBiggerTwo(2017))