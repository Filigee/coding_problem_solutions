function findHack(arr) {
    // if arr[1] > 200 or if arr[2] values summed is not equal to arr[1]
    
    let cheaters = []
    
    for(let student of arr){
      console.log(student)
      let grade_total = 0
      let grades_above_b = 0
      for(let i = 0; i < student[2].length; i++){
        grade_total += find_score(student[2][i])
        if(find_score(student[2][i]) >= 20){
          grades_above_b++
        }
      }
      if(grades_above_b == student[2].length && student[2].length >= 5){
        if(grade_total >= 180){
          grade_total = 200
        }
        else{
          grade_total += 20
        }
      }
      if(student[1] > 200 || student[1] != grade_total){
        cheaters.push(student[0])
      }
    }
    
    return cheaters
  }
  
  const find_score = (grade) => {
    if(grade == "A") return 30
    else if(grade == "B") return 20
    else if(grade == "C") return 10
    else if(grade == "D") return 5
    else return 0
  }