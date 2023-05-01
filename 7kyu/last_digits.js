// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/train/javascript

function lastDigit(n, d) {
    const length = String(n).length
    let array = []
    if(d <= 0) return []
    else if(d >= length){
      console.log("Called")
      for(let i = 0; i < length; i++){
        const str = String(n)
        const num = str[i]
        array.push(Number(num))
      }
      return array
    }
    
    
    console.log(length)
    console.log(d)
    for(let i = length - d; i < length; i++){
      const str = String(n)
      const num = str[i]
      array.push(Number(num))
    }
    
    return array
  }