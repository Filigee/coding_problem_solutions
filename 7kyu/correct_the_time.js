// https://www.codewars.com/kata/57873ab5e55533a2890000c7

function timeCorrect(timestring) {
  // string
  // string, null
  // timeCorrect("001122") => null
  // timeCorrect("19:99:09") => "20:39:09"
  
  // split the string at : 
  // check if each number is correct (e.g split[0] < 24 split[1] < 60 etc)
  // if any is wrong then correct the values and check again
  // join with : 
  // return string
  
  if(timestring == null)
    return null
  else if(timestring == "")
    return ""
  else if(timestring.match(/[0-9:]/g).length != 8)
    return null
  
  const split_times = timestring.split(":")
  
  function checkTimes(times){
    times[0] = +times[0]
    times[1] = +times[1]
    times[2] = +times[2]
    
    if(times[0] > 23){
      times[0] = times[0] % 24 
    }
    
    if(times[1] > 59){
      times[1] = times[1] % 60
      times[0] += 1
      checkTimes(times)
    }
    
    if(times[2] > 59){
      times[2] = times[2] % 60
      times[1] += 1
      checkTimes(times)
    }
    
    return `${times[0] < 10 ? "0" + times[0] : times[0]}` + ":" + 
      `${times[1] < 10 ? "0" + times[1] : times[1]}` + ":" +
      `${times[2] < 10 ? "0" + times[2] : times[2]}`
  }
  
  return checkTimes(split_times)
  
}