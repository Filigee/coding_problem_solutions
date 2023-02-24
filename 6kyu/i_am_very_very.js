// https://www.codewars.com/kata/58402cdc5225619d0c0000cb

function iam(input, n = 0) {
    return input
      ? "I am " + "very ".repeat(n) + input
      : input => iam(input, n + 1)
}


