// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let user1 = prompt('Enter the first number:');
let user2 = prompt("Enter the second number:");
if (user1  > user2){
    console.log(`large number is ${user1}`)
}else if(user2  > user1){
    console.log(`large number is ${user2}`)
}else{
    console.log(' number is equil ')
}
