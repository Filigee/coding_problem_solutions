// https://www.codewars.com/kata/5f4f9e1aac9fa3002e6e09f3

function podium(scores){
    // object of arrays
    // object of objects
    
    let podium = {
      "gold": {
        "score": 0,
        "players": []
      },
      "silver": {
        "score": 0,
        "players": []
      },
      "bronze": {
        "score": 0,
        "players": []
      }
    }
    
    let medal_check = "gold"
    let sorted_array = []
    
    for(let x in scores){
      scores[x] = scores[x].reduce((x, i) => x + i, 0)
      sorted_array.push([x, scores[x]])
    }
    
    sorted_array.sort((a, b) => {
      return b[1] - a[1]
    })
    
    for(let i = 0; i < sorted_array.length; i++){
      if(medal_check = "gold"){
        if(sorted_array[i][1] == sorted_array[i+1][1]){
          podium.gold.score = sorted_array[i][1]
          podium.gold.players = [sorted_array[1][0], sorted_array[i+1][0]]
        }
      }
    }
    
    
    console.log(sorted_array)
    
  }

  function podium(scores){
    scores = Object.entries(scores).filter(kv=>kv[1].length);
    scores.forEach(kv=>kv[1]=kv[1].reduce((a,b)=>a+b,0));
    scores.sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
    
    let out={}, place=-1, score=Infinity, lst=[null];
    let medals='gold silver bronze'.split(' ');
    for(let [name,s] of scores){
      if(score!=s){
        score=s; place+=lst.length; lst=[];
        if(place>=3) break;
        out[medals[place]] = {score:s, players:lst}
      }
      lst.push(name);
    }
    return out;
  }