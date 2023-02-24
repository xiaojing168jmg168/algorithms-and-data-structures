// Write a function called binarySearch which accepts a sorted array addEventListener
// a value and returns the index at which the value exists. Otherwise, return -1;


function binarySearch(arr, num){
    let start = 0;
    let end = arr.length -1;
    let mid = Math.floor((start + end) / 2);
 
    while(arr[mid] !== num && start <= end){
        if(arr[mid] < num) start = mid+1;
        else end = mid-1;   
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] === num ? mid : -1;

}

console.log(binarySearch([1,2,3,4,5,6,7,12], 13));

//Big O is olog(n);linear search is O(N)
//Olog(n) is better than O(n), so binary search better than linear search