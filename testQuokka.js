function segitiga(num){
    var final = ''
    for(var x=num; x>=1; x--){
        var result = '';
        for(var y=x; y>=1; y--){
            result += y
        }
        final += result + '\n';
    }
    return final;
}
console.log(segitiga(5))