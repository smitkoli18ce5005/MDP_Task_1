//Calculate 10!

function fact(){
    var f=1;
    for(let i=1;i<=10;i++){
        f *= i;
    }
    console.log("Factorial of 10 = " +f);
}
fact();