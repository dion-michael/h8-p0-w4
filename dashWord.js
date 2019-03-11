function dashWord(number, word){
    var result = '';
    for (var x=0; x<word.length;){
        for(var y=x; y<x+number; y++){
            if(y<word.length){
                result = result + word[y];
            }
        }
        if(y>=word.length){
            return result;
        }
        result = result + '-'
        x = x + number;
    }
}
console.log(dashWord(2, 'dionMichael'))

var arr = [
    [3,7,2],
    [4,4,4,4],
    [1,1,2,3],
]

function generateArr(array){
    var arrResult = [];
    for(var x=0; x<array.length; x++){
        var sum = 0;
        for(var y=0; y<array[x].length; y++){
            sum = sum + array[x][y]
        }
        arrResult.push(sum);
    }
    return arrResult;
}

console.log(generateArr(arr));
