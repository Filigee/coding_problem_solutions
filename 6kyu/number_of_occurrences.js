// https://www.codewars.com/kata/52829c5fe08baf7edc00122b

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let count = 0
      
      for(let i = 0; i < this.length; i++){
        if(this[i] == element)
          count++
      }
      
      return count
    }
  });