// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// if a smaller number is found. designate that smaller number to be the new 'minimum' is not the value(index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted
function selectSort(arr){
    for(var i = 0; i< arr.length; i++){
        var lowest = i;
        for(var j = i+1; j< arr.length; j++){
         
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        
    }
    return arr;
}
console.log(selectSort([34, 22, 10, 19, 17]));