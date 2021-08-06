//Create a function that receives an array of numbers and returns an array containing only the positive numbers

var array = [-1,2,-3,-4,-5,6,-7,8];

function positives(array){
    var pos = [];
    for(let i=0;i<array.length;i++){
        if(array[i] > 0){
            pos.push(i+1);
        }
    }
    return pos;
}

console.log(positives(array));