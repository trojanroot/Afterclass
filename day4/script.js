//print number from 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//print even number from 2 to 20
// for(let i=2;i<=20;i=i+2)
// {
//     console.log(i);
// }

//print odd number from 1 to 20
// for(let i=1;i<=20;i=i+2)
// {
//     console.log(i);
// }

//print even number from 10 to 1
// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }

//find the sum of number from  1to 100;
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;    
// }
// console.log("Sum is: ",sum);

//print the multiplication of 7
// let num=7;
// for(let i=1;i<=10;i++){
//     console.log(num+"X"+i+"="+num*i);
// }

//multiplication table as user asked
// let num=prompt("Enter the number");
// for(let i=1;i<=10;i++){
//     console.log(num+"X"+i+"="+num*i);
// }

//pattern
// for(let i=0;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
// }

//
let num=prompt("Enter the number");
let i;
for(let i=0;i<=num;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern=pattern+i;
    }
    console.log(pattern)
}