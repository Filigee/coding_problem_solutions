// https://www.codewars.com/kata/5901555b63bf404a66000029

function lightBulbs(array, n) {
    // array of numbers, number of turns
    // array of final state
    
    // lightBulbs([0, 1, 1, 0], 1) => [0, 1, 0, 0]
    
    // If a bulb is on during a turn then the bulb to it's right changes state
    
    // Loop through the array n times.
    // If the bulb at i - 1 is 1 then the state of i changes
    
    let constant_array = []
    let changing_array = []
    
    array.forEach(x => {
      changing_array.push(x)
      constant_array.push(x)
    })
    
    for(let i = 0; i < n; i++){
      for(let j = 0; j < array.length; j++){
        if(j == 0){
          if(constant_array[array.length - 1] == 1){
            changing_array[j] = swap(constant_array[j])
          }
        }
        else{
          if(constant_array[j - 1] == 1){
            changing_array[j] = swap(constant_array[j])
          }
        }
      }
      constant_array = []
      changing_array.forEach(x => constant_array.push(x))
    }
    
    return changing_array
  }
    
  function swap(current_bulb){
    if(current_bulb == 0) return 1
    else return 0
  }


  // Alternative Solution

  // function lightBulbs(lights, n) {

  //   let res = lights;
  
  //   while (n--) 
  //     res = res.map((l, i) => res[(i || res.length) - 1] ? 1 - l : l);
  
  //   return res;
  
  // }