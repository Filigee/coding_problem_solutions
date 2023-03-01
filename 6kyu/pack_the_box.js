// https://www.codewars.com/kata/5840df348c7e72243100012a

function pack(box, string) {
    box = box.split('\n').map(row => [...row]);
    let unpackables = [];
    
    for (let letter of string) {
      let packed = letter.toUpperCase() === letter
        ? packBig(letter, box)
        : packSmall(letter, box);
      if (!packed) unpackables.push(letter);
    }
    
    return unpackables.length
      ? unpackables.join(', ')
      : box.map(row => row.join(' ')).join('\n');
  }
  
  function packBig(letter, box) {
    console.log(box.slice(0,-1))
    for (let [y,row] of box.slice(0,-1).entries()) {
      for (let x = 0; x < row.length; x++) {
        if (row[x] + row[x+1] + box[y+1][x] + box[y+1][x+1] === '####') {
          row[x] = row[x+1] = box[y+1][x] = box[y+1][x+1] = letter;
          return true;
        }
      }
    }
  }
  
  function packSmall(letter, box) {
    for (let row of box) {
      let idx = row.indexOf('#');
      if (~idx) {
        row[idx] = letter;
        console.log(box)
        return true;
      }
    }
  }

  console.log(pack("####\n####\n####\n####", "AbC"))