// https://www.codewars.com/kata/55b75fcf67e558d3750000a3

class Block{

    constructor(data){
      this.getWidth = data[0]
      this.getLength = data[1]
      this.getHeight = data[2]
    }

    getVolume = () => data.reduce((acc, cur) => acc * cur, 1)
    
    getSurfaceArea = () => {
        const side1 = this.getWidth * this.getLength
        const side2 = this.getWidth * this.getHeight
        const side3 = this.getHeight * this.getLength
              
        return (side1 + side2 + side3) * 2
    }
    
}
  