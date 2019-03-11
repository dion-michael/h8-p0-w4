function checkAB(num) {
    // you can only write your code here!
    var a = [];
    var b = [];
    for(var x=0; x<num.length; x++){
        if(num[x] === 'a'){
            a.push(x)
        }
        else if (num[x] === 'b'){
            b.push(x)
        }
    }
    for(var x=0; x<a.length; x++){
        for(var y=0; y<b.length; y++){
            if(Math.abs(a[x]-b[y]) === 4){
                return true;
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false