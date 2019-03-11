function urutkanAbjad(str) {
  // you can only write your code here!
  var strArr = []
  for(var x=0; x<str.length; x++){
    strArr.push(str[x]);
  }
  for(var x=0; x<strArr.length-1; x++){
    if(strArr[x] > strArr[x+1]){
      var temp = strArr[x+1];
      strArr[x+1] = strArr[x];
      strArr[x] = temp;
      x-=2;
    }
  }
  return strArr.join('');
}

// TEST CASES
//console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'