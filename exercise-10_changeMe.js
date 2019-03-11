function changeMe(arr) {
    // you can only write your code here!
    for(var x=0; x<arr.length; x++){
        var age = arr[x][3];
        if(age < 2019){
            age = 2019 - age;
        }
        else{
            age = 'invalid birth year'
        }
        var data = {
            firstName: arr[x][0],
            lastName: arr[x][1],
            gender: arr[x][2],
            age: age
        }
        console.log(x+1 +'. '+ data.firstName, data.lastName, ':\n', data);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""