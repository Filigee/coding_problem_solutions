// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
    let points = 0
    
    for(let i = 0; i < games.length; i++){
      const colon_index = games[i].indexOf(":")
      const x_score = games[i].slice(0, colon_index)
      const y_score = games[i].slice(colon_index + 1)
      
      if(x_score > y_score) points += 3
      else if(x_score == y_score) points += 1 
    }
    
    return points 
  }