// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase=function(){
  if(this == "") return ""
  const split = this.split(" ")
  for(let i = 0; i < split.length; i++){
    split[i] = split[i][0].toUpperCase() + split[i].slice(1)
  }
  return split.join("")
}