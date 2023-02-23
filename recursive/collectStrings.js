// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj){
    var newArr =[];
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            newArr.push(obj[key]);
        }else if(typeof obj[key] === 'object'){
            newArr = newArr.concat(collectStrings(obj[key]))
        }
    }
    return newArr;
}



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));