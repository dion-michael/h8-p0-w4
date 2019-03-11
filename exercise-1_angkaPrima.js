function angkaPrima(angka) {
    // you can only write your code here!
    var counter = 0;
    var isPrime = false;
    for(var x=1; x<=angka; x++){
        if(angka%x === 0){
            counter++
        }
    }
    if(counter === 2){
        isPrime = true;
    }
    return isPrime;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false