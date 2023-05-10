// https://www.codewars.com/kata/52a723508a4d96c6c90005ba/train/javascript

var sing = function () {
    let array = []
    
    for(let i = 99; i >= 0; i--){
      if(i > 2){
        array.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        array.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
      }
      else if(i == 2){
        array.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
        array.push(`Take one down and pass it around, ${i-1} bottle of beer on the wall.`)
      }
      else if(i == 1){
        array.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
        array.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
      }
      else{
        array.push("No more bottles of beer on the wall, no more bottles of beer.")
        array.push("Go to the store and buy some more, 99 bottles of beer on the wall.")
      }
    }
    
    return array
  };