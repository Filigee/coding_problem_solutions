function findMultiples(integer, limit) {
  let x = integer
  let array = []
  let i = 1
  while(x < limit){
    x = integer * i
    if(x <= limit)
      array.push(x)
    i++
    console.log(x)
  }
  
  return array
}
