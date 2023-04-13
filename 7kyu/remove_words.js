// https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

function remove (string) {
    return string.split(" ").filter(x => {
      if(x.includes("!") && x.indexOf("!") != x.lastIndexOf("!")) return true
      else if(!x.includes("!")) return true
      else return false
    }).join(" ")
  }