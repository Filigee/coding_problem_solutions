// https://www.codewars.com/kata/58fec262184b6dc30800000d/train/javascript

function maximizePoints(team1, team2) {
    let points = 0
    
    team1.sort((a,b) => a - b)
    team2.sort((a,b) => a - b)
    
    for(let i = 0; i < team1.length; i++){
      if(team1[i] > team2[0]){
        points++
        team2.shift()
      }
    }
    
    return points
    
  }