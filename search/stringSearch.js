// Suppose you want to count the number of times a smaller string appears in a long string

function stringSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length-1) count++;
        }
    }
    return count;
}

console.log(stringSearch('lorie, loled', 'lol'));

//Big O is O(nm)