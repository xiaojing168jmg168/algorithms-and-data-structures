function countDown(num){
    if(num <= 0){
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5);
// output:5
// 4
// 3
// 2
// 1
// All Done!