// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(message) {
    // string
    // string
    
    // Take message and split into an array
    // Figure out the letter at the first index of each word
    // Switch the 2nd and last letter in each word
    // Join words together to reform a string
    
    return message.split(" ").map(word => {
      const char_code = word.split("").filter(word => word.match(/[0-9]/g)).join("")
      const word_without_numbers = String.fromCharCode(char_code) + word.slice(char_code.length)
      if(word_without_numbers.length > 2){
        return word_without_numbers.slice(0, 1) + word_without_numbers[word_without_numbers.length - 1] 
        + word_without_numbers.slice(2, word_without_numbers.length - 1) + word_without_numbers[1]
      }
      else{
        return word_without_numbers
      }
    }).join(" ")
  }; 