// var ar1 = []
// ar1[0] = "Padma"
// ar1[1] = "Karnafully"
// ar1[2] = "Titas"
// ar1[3] = "Isamoti"
// console.log(ar1[1])

// var ar = [1,2,3,4,5,6]
// console.log("i am before push", ar)
// for (i = 0; i<ar.length;i = i+2){
//     ar.push(ar[i]+2)
// }
// console.log(ar)

// var riverList = ["a","b","c"]
// console.log(riverList)
// riverList.pop()

// console.log(riverList)
// riverList.pop()
// console.log(riverList)

// prompt = require("prompt-sync")()
// ar = []
// console.log(ar)
// for (var i = 0; i< 5;i++){
//     var a = (prompt("enter 5 river name: "))
//     ar.push(a)
// }
// console.log(ar)
// 
// var number = [2,4,6,8,10]
// var input = require("prompt-sync")();
// for(var i = 0; i <4;i++){
//     var userInput = Number(input("Enter 5 number: "))
//     if(userInput == number){
//         console.log("it's an even number",i)
//     }
//     else{
//         console.log("odd number")
//         }
//     }


// var prompt = require("prompt-sync")();
// ar = [i]
// for(var i = 0; i <5;i++){
// var num = Number(prompt("enter 5 number: "))
// ar.push(num)}
//     console.log("Before sorting" , ar)
//     console.log(ar.sort())

// var ar2D = [[1,2,3]
//             [5,6,7]
//             [9,12,8]]

// for(var i = 0; i <ar2D.length;i++){
//     for (var j = 0;j<3 ;j++){
//         sum = sum + i
//     console.log(ar2D[i][j]); }
//     console.log("The sum ",sum)
//     }
// var ar2D = [[2,7,89,6],
//             [90,45,3,7],
//             [78,56,4,2]]
// var ar1D = []
// for(var i = 0; i<ar2D.length;i++){
//     for( var j = 0; j<4;j++){
//         ar1D.push(ar2D[i][j])
//     }
// }
// console.log(ar1D)
 var prompt = require("prompt-sync")();
ar = [i]
for(var i = 0; i <5;i++){
var num = Number(prompt("enter 5 number: "))
ar.push(num)};
    if (num%2 == 0){
       console.log("It's an even number")
    }
    else if (num%2 == 1){
        console.log("It's an odd number")
    }
    console.log(ar)