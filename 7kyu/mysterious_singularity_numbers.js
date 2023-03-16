// https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d

function realNumbers(n){ var itog = n 
    - (Math.floor(n/2)) 
    - (Math.floor(n/3)) 
    + (Math.floor(n/6))
    - (Math.floor(n/5))
    + (Math.floor(n/10))
    + (Math.floor(n/15))
    - (Math.floor(n/30))
      return  itog
}