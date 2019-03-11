function fpb(angka1, angka2) {
    // you can only write your code here!
    var pembagi = [];
    var min = angka1;
    if(angka2<angka1){
        min = angka2;
    }
    for(var x=1; x<=min; x++){
        if(angka1%x === 0 && angka2%x === 0){
            pembagi.push(x)
        }
    }
    var max = pembagi[0];
    for(var x=0; x<pembagi.length; x++){
        if(pembagi[x]>max){
            max = pembagi[x]
        }
    }
    return max;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1