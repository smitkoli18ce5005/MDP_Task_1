//Create a function that will return a Boolean specifying if a number is prime

var number = 8;
var isprime = false;
function helper(num){
    if(num == 0 || num == 1){
        isprime = false;
    }
    else{
        for(let i=2;i<=num/2;i++){
            if(num/i != 0){
                isprime = true;
            }
        }
    }
    return isprime;
}

helper(number);
if(isprime){
    console.log(number +"is a Prime Number");
}
else{
    console.log(number +"is not a Prime Number");
}