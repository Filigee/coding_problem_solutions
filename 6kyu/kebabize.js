// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
    let array = str.replace(/[0-9]/g, "").split("")
    console.log(array)
    for(let i = 1; i < array.length; i++){
      if(array[i] == array[i].toUpperCase()){
        array.splice(i, 0, "-")
        i++
      }
    }
    return array.join("").toLowerCase()
  }