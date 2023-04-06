// https://www.codewars.com/kata/58ad2e9c0e3c08126000003f

function notSoRandom(b, w) {
    if (b == 1 && w == 1) return "Black";
    if (b + w == 2) return "White";
    let x = (b >> 1), y = (w >> 1);
    b -= 2 * x;
    w -= 2 * y;
    w += x + y;
    return notSoRandom(b, w);
}

function notSoRandom(b){
    return b % 2 == 0 ? "Black": "White"
}

notSoRandom(2, 2)
// 13 => 1101 10 => 1010
// x = 110 = 6, y = 101 = 5
// b -= 13 - 12 = 1
// w -= 10 - 10 = 0 
// w += 11

