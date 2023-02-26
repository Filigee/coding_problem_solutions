// https://www.codewars.com/kata/5a3141fe55519e04d90009d8

function cardGame(card1, card2, trump) {
    // string
    // string
    
    // cardGame('3♣', 'Q♣', '♦') => 'The second card won.'
    
    // check if both cards are the same 
    // then check for a joker
    // create a helper function to convert face cards into numbers
    // check if cards have same suit as the trump // that card wins
    // else replay
    
    // Help function to convert face cards to numbers
    function faceToNum(card){
      if(card == "T") return 10
      else if(card == "J") return 11
      else if (card == "Q") return 12
      else if (card == "K") return 13
      else if (card == "A") return 14
      else return +card
    }
    
    // Check if card is a 10 and convert to a "T + Suit" for card checks below
    if(card1[1] == "0" && card2[1] == "0"){
      card1 = `T${card1[2]}`
      card2 = `T${card2[2]}`
    }
    if(card1[1] == "0")
      card1 = `T${card1[2]}`
    else if(card2[1] == "0")
      card2 = `T${card2[2]}`
    
      
    // Win conditions
    if(card1 == card2)
      return "Someone cheats."
    else if(card1 == "joker")
      return "The first card won."
    else if(card2 == "joker")
      return "The second card won."
    else if(card1[1] == trump && card2[1] == trump || card1[1] == card2[1]){
      if(faceToNum(card1[0]) > faceToNum(card2[0]))
        return "The first card won."
      else
        return "The second card won."
    }
    else if(card1[1] == trump)
      return "The first card won."
    else if(card2[1] == trump)
      return "The second card won."
    else 
      return "Let us play again."
  }