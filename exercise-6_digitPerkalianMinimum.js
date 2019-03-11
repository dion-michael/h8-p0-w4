function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var factor = [];
  for(var x=1; x<=Math.floor(angka/2); x++){
    
    for(var y=angka; y>=1; y--){
      var temp = []
      if(temp.length !== 0){
        if(x*y === angka && x !== factor[factor.length-1][1]){
          break;
        }
      }
      else if(x * y === angka){
        temp.push(x,y);
      }
      if(temp.length!==0){
        factor.push(temp);
      }
    }
  }
  var uniqueFactor = [factor[0]];
  for(var x=1; x<factor.length; x++){
    if(factor[x][0] !== factor[x-1][1]){
      uniqueFactor.push(factor[x])
    }
  }
  return factor;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
//console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2