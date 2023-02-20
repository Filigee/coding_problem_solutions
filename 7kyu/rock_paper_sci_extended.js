// https://www.codewars.com/kata/57d29ccda56edb4187000052

function rpsls(p_one, p_two){
    // string
    // string
    
    
    if(p_one == "scissors"){
      return checkWin("paper", "lizard", "rock", "spock")
    }
    else if(p_one == "paper"){
      return checkWin("rock", "spock", "lizard", "scissors")
    }
    else if(p_one == "rock"){
      return checkWin("lizard", "scissors", "spock", "paper")
    }
    else if(p_one == "lizard"){
      return checkWin("spock", "paper", "scissors", "rock")
    }
    else{
      return checkWin("scissors", "rock", "paper", "lizard")
    }
    
    function checkWin(win_cond_one, win_cond_two, loss_cond_one, loss_cond_two){
      if (p_two == win_cond_one || p_two == win_cond_two) return "Player 1 Won!"
      else if(p_two == loss_cond_one || p_two == loss_cond_two) return "Player 2 Won!"
      else return "Draw!"
    }
  
  }