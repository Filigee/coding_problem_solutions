function countSquares(cuts){
    return cuts == 0 ? 1 : cuts * cuts * 6 + 2
  }