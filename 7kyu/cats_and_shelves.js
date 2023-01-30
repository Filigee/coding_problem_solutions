// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish) 
{
  const distance = finish - start
  
  if(distance % 3 == 0)
    return distance / 3
  else if(distance % 3 == 1)
    return (distance - 1) / 3 + 1
  else
    return (distance - 2) / 3 + 2
}