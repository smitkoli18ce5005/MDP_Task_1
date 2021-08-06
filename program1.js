//Given a string, reverse each word in the sentence

var string = "smit";
var revString = "";
for(let i=string.length-1;i>=0;i--){
    revString += string[i];
}
console.log(revString);