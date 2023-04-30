// https://www.codewars.com/kata/6066ae080168ff0032c4107a

function maxSumBetweenTwoNegatives(a) {
    // a array of numbers, find largest sum between 2 negative numbers
    
    let sum = 0
    console.log(a)
    const neg = a.filter(x => x < 0)
    let neg_counter = 0
    
    for(let i = 0; i < a.length; i++){
      if(a[i] < 0){
        neg_counter++
        if(neg_counter == neg.length) break
        let n_sum = 0
        for(let j = i + 1; j < a.length; j++){
          if(a[j] < 0) break
          n_sum += a[j]
          console.log(n_sum)
        }
        
        if(n_sum > sum) sum = n_sum
      }
    }
    
    return neg.length <= 1 ? -1 : sum
  }