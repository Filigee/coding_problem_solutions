// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
    if(iterable instanceof String)
      iterable = iterable.split("")
    
    const unique = []
    
    for(let i = 0; i < iterable.length; i++){
      if(iterable[i] != iterable[i+1])
        unique.push(iterable[i])
    }
    
    return unique
  }

  

