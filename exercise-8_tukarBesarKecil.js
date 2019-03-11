function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var result = ''
    for(var x=0; x<kalimat.length; x++){
        if(kalimat[x] === kalimat[x].toUpperCase()){
            result += kalimat[x].toLowerCase();
        }
        else if(kalimat[x] === kalimat[x].toLowerCase()){
            result += kalimat[x].toUpperCase();
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"