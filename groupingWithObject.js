

function groupAnimalObject(data){
    var result = {}
    for(var x=0; x<data.length; x++){
        if(result[data[x][0]] === undefined){
            result[data[x][0]] = [];
        }
        result[data[x][0]].push(data[x]);  
    }
    return Object.keys(result).length;
}
var obj = {};
var arr = ['anjing', 'cicak', 'cacing', 'domba', 'ayam', 'elang', 'kuda', 'kancil', 'dugong', 'anoa'];
console.log(groupAnimalObject(arr));