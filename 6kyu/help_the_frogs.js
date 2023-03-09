// https://www.codewars.com/kata/626d96eb49cb3c7a2f634bbf/javascript

function whiteBlackFrogs(n) {
    const resultHalf = [];
    
    for(let i = 1; i <= n; i++) {
      i % 2 === 0 ? resultHalf.push("b") : resultHalf.push("w");
      resultHalf.push(String("j").repeat(i));
    }
    
    const result = resultHalf.join("");
    
    resultHalf.reverse();
    
    return result + resultHalf.slice(1).join("");
}

whiteBlackFrogs(2)