function unshiftManual(arr, value){
    for(var x = arr.length; x>=0; x--){
        if(x===0){
            arr[x] = value;
        }
        else{
            arr[x] = arr[x-1]
        }
    }
    return arr;
}
var arr = [1,2,3,4,5,6,7];
console.log(unshiftManual(arr, 10));

function unshiftManual2(arr, value){
    for(var x = 0; x<arr.length; x++){
        if(x===0){
            arr[x] = value;
        }
        else{
            arr[x] = arr[x-1]
        }
    }
    return arr;
}
var arr = [1,2,3,4,5,6,7];
console.log(unshiftManual2(arr, 10));