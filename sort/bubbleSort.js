//bubble sort always pup up the bigest one first

function bubbleSort(arr){
    var noSwarps;
    for(var i = arr.length; i > 0; i--){
        noSwarps = true;
        for(var j = 0; j< i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwarps = false;
            }
        }
        if(noSwarps) break;
    }
    return arr;
}
console.log(bubbleSort([8,1,2,3,4,5,6,7]));
//Big O is o(n*n)