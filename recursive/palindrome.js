//palindrome 回文
function isPalindrome(word){
    if(word.length === 0 || word.length === 1) return true;
    if(word[0] !== word[word.length-1]) return false;
     return isPalindrome(word.substr(1, word.lengthd-2));
}

console.log(isPalindrome("racecar"));


// Demo substr() 
// const str = 'Mozilla';

// console.log(str.substr(1, 2));
// Expected output: "oz"

// console.log(str.substr(2));
// Expected output: "zilla"