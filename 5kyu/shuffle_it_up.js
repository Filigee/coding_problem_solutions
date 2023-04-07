// https://www.codewars.com/kata/5b997b066c77d521880001bd

// My Attempt
// function allPermuted(l, n = 1, sub_fac_n_1 = 0, sub_fac_n_2 = 0) {
//     // subfactorial formula = !n = (n - 1) * (!(n-1) + !(n-2))
    
//     l = Number(l)
//     console.log(n)  
//     if (n == l){
//       console.log("Called")
//       const result = BigInt(n-1) * (BigInt(sub_fac_n_1) + BigInt(sub_fac_n_2))
//       console.log(result)
//       return result
//     }
    
//     if (n == 2){
//       return allPermuted(l, n+1, sub_fac_n_1 + 1, sub_fac_n_2)
//     }
    
//     const next_sub_fact = BigInt(n-1) * (BigInt(sub_fac_n_1) + BigInt(sub_fac_n_2))
//     console.log(next_sub_fact)
//     sub_fac_n_2 = sub_fac_n_1
//     sub_fac_n_1 = Number(next_sub_fact)
//     return allPermuted(l, n+1, sub_fac_n_1, sub_fac_n_2)
// }

// Solution
// Can I refactor this so that the while loop only needs to run l amount of times?
const VALUES = {
    1: 0n,
    2: 1n,
    3: 2n
  }
  let index = 4;
  while(index <= 5000){
    VALUES[index] = BigInt(index - 1) * (VALUES[index - 1] + VALUES[index - 2]);
    index++;
}

function allPermuted(l) {
    return VALUES[l];
}

allPermuted(10)