function sortEmotions(arr, order){
    // arr array of emotions
    // order if true is happy to sad, false vice versa
    
    const emotions = {
      ":D": 0,
      ":)": 1,
      ":|": 2,
      ":(": 3,
      "T_T": 4
    }
    
    const em_order = []
    
    for(let i = 0; i < arr.length; i++){
      em_order.push(emotions[arr[i]])
    }
    
    if(order)
      em_order.sort((a, b) => a - b)
    else
      em_order.sort((a, b) => b - a)
      
    
    const sorted_emotions = []
    const keys = Object.keys(emotions)
    
    for(let i = 0; i < em_order.length; i++){
      sorted_emotions.push(keys[em_order[i]])
    }
    
    return sorted_emotions
}