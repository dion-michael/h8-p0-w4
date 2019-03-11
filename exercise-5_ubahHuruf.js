function ubahHuruf(kata) {
  // you can only write your code here!
  var library='abcdefghijklmnopqrstuvwxyz'
  var result = ''
  for(var x=0; x<kata.length; x++){
    for(var y=0; y<library.length; y++){
      if(kata[x] === library[library.length-1]){
        result+=library[0]
      }
      else if(kata[x] === library[y]){
        result+=library[y+1]
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu