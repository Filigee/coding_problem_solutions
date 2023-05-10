// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript

// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let count = 0
    
    for(let i = 0 ; i < buttons.length; i++){
      if(buttons[i] == "Like" && count != 1){
        count = 1
      }
      else if(buttons[i] == "Dislike" && count != -1){
        count = -1
      }
      else{
        count = 0
      }
    }
    
    return count == 1 ? "Like" : count == -1 ? "Dislike" : "Nothing"
  }