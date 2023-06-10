// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0]
    for(let i = 1; i < args.length; i++){
      if(args[i] < smallest) smallest = args[i]
    }
    
    return smallest
  }
}