// https://www.codewars.com/kata/51e704f2d8dbace389000279

function arraysSimilar(arr1, arr2) {
    // two arrays
    // bool
    // arraysSimilar([1,2,3,5,4], [2,4,1,3,5]) => true
    // arraysSimilar([1,2,3,5], [2,4,1,3,5]) => false
    
    // We want to compare both of the arrays with eachother
    // Both arrays should have the same elements of the same type
    // So we can sort the arrays
    // Then loop through an array and compare each element between the arrays
    // If they don't all match then the arrays aren't similar
    
    arr1.sort()
    arr2.sort()
    
    if(arr1.length != arr2.length)
      return false
    
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] != arr2[i] || typeof arr1[i] != typeof arr2[i]){
        return false
      }
    }
    
    return true
  }