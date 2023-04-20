function chain(input, fs) {
    let result = 0;
  
    result = fs[0](input);
    
    for (let i = 1; i < fs.length; i++) {
      
    result = fs[i](result);
  
    }
  
    return result;
}