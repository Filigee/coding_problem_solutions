// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score( dice ) {
  
    let score = 0
    const sorted = dice.sort().filter((dice, i, array) => i == array.lastIndexOf(dice)).forEach(di => {
      let count = 0
      for(let i = 0; i < dice.length; i++){
        if(di == dice[i])
          count++
      }
      
      score += calcPoints(di, count)
    })
    
    function calcPoints(dice, count){
      if(count == 5) return dice == 1 ? 1200 : dice == 5 ? 600 : dice * 100
      else if(count == 4) return dice == 1 ? 1100 : dice == 5 ? 550 : dice * 100
      else if(count == 3) return dice == 1 ? 1000 : dice * 100
      else if(count == 2) return dice == 1 ? 200 : dice == 5 ? 100 : 0
      else if(count == 1) return dice == 1 ? 100 : dice == 5 ? 50 : 0
      else return 0
    }
    
    return score
  }

  // https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

  function generateHashtag (str) {
    str = str.trim()
    if(str == "" || str == null || str == undefined) return false
    
    let final = "#" + str.split(" ").filter(char => char.match(/[a-zA-Z]/)).map(char => char[0].toUpperCase() + char.slice(1)).join("")
    
    return final.length > 140 ? false : final
  }