//q1
//print number from 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//q2
//print even number from 2 to 20
// for(let i=2;i<=20;i=i+2)
// {
//     console.log(i);
// }

//q3
//print odd number from 1 to 20
// for(let i=1;i<=20;i=i+2)
// {
//     console.log(i);
// }

//q4
//print even number from 10 to 1
// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }

//q5
//find the sum of number from  1to 100;
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;    
// }
// console.log("Sum is: ",sum);

//q6
//print the multiplication of 7
// let num=7;
// for(let i=1;i<=10;i++){
//     console.log(num+"X"+i+"="+num*i);
// }

//q7
//multiplication table as user asked
// let num=prompt("Enter the number");
// for(let i=1;i<=10;i++){
//     console.log(num+"X"+i+"="+num*i);
// }

//q8
// pattern
// for(let i=0;i<=5;i++){
//     let row = "";
//      for(let j=1;j<=i;j++){
//     row += "*";
//     }
//     console.log(row);
//  }

//q9
// let num=prompt("Enter the number");
// let i;
// for(let i=0;i<=num;i++){
//     let pattern="";
//     for(let j=1;j<=i;j++){
//         pattern=pattern+i;
//     }
//     console.log(pattern)
// }


// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }
// for (let i = 1; i <=5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }

//q10
// let num=1;
// for(i=1;i<=4;i++){
//     let row="";
//     for(j=1;j<=i;j++)
//     {
//         row+=num+" ";
//         num++
//     }
//     console.log(row);
// }
//q11
//
// let num=1;
// for(i=1;i<=5;i++){
//     let row="";
//     for(j=1;j<=i;j++)
//     {
//         row+=num+" ";
//         num++
//     }
//     console.log(row);
// }

//q12
let row=5;
for(i=1;i<=row;i++){
    pattern="";
    for(j=1;j<=row-i;j++){
        pattern+= " ";
    }
    for(k=1;k<=(2*i-1);k++){
        pattern+= "*";
    }
    console.log(pattern);
}