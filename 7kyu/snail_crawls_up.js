// https://www.codewars.com/kata/5b93fecd8463745630001d05

function snail(column, day, night) {
    let total = 0
    let days = 0
    
    while(total <= column){
      total += day
      if(total >= column){
        days++
        return days
      }
      total -= night
      days++
    }
    
    return days
}