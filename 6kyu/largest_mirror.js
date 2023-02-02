// https://www.codewars.com/kata/5a3f61bab6cfd7acbc000001

const maxMirror = (array) => {
    console.log(array)
    // Reverse the array and convert it into a string
    let reverse = `,${[...array].reverse().toString()},`
    
    // Decrementing loop of array.length
    for (let i = array.length; i > 1; i--) {
        // Decrementing loop of array.length - i
        for (let j = array.length - i; j >= 0; j--) {
            // Slice the array between j and i + j, to check each chunk between j and i + j in length throughout the array
            // If the reversed string includes that array slice, then whatever the value of i is can be returned because that is the length of the current chunk being checked
            console.log(`,${array.slice(j, i + j)},`)
            if (reverse.includes(`,${array.slice(j, i + j)},`)) return i
        }
    }
    return 0
}

console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]))