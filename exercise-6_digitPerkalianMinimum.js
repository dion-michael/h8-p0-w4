function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var factor = [];
  for(var x=1; x<=angka; x++){
    for(var y=1; y<=angka; y++){
      if(x * y === angka){
        var temp = [x,y]
        factor.push(temp)
      }
    }
  }
  var fewestDigit = factor[0].join('').length;
  for(var x=0; x<factor.length; x++){
    if(factor[x].join('').length < fewestDigit){
      fewestDigit = factor[x].join('').length;
    }
  }
  return fewestDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2