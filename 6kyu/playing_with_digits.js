// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(base, start_power){
  
    const digits = base.toString().split("")
    
    // power to be incremented by 1 for each following digit after first
    let current_power = start_power
    
    // sum of digits to their respective powers
    const sum_of_digits = digits.reduce((sum_of_digits, digit) => {
      const digit_to_power = Math.pow(digit, current_power)
      current_power = current_power + 1
      return sum_of_digits + digit_to_power
    }, 0)
    
    const k = sum_of_digits / base
    const whole_number_check = Math.floor(k) == k ? true : false
    
    return whole_number_check ? k : -1
    
  }