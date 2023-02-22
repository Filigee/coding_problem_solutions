// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

function last(x){
    // string
    // array of strings
    
    // last("A axe is good") => ["A", "good", "axe", "is"]
    
    // Split the given string in an array using " " as separator
    // Sort the array using a[a.length - 1] and b[b.length - 1]
    
    return x.split(" ").sort((a, b) => {
      if(a[a.length - 1] < b[b.length - 1]) return -1
      else if (a[a.length - 1] > b[b.length - 1]) return 1
      else return 0
    })
  }