// let a=Number(prompt("Enter a Number"));
// if(a%2===0)
// {
//     console.log("It is a even number");
// }
// else{
//     console.log("It is odd number");
// }

// let temperature=Number(prompt("Enter a Temperature"));
// if(temperature>=37.5)
// {
//     console.log("You got a fever");
// }
// else{
//     console.log("It's normal");
// }

// let temperature=Number(prompt("Enter a Temperature"));
// if(temperature>=37.5)
// {
//     console.log("You got a fever");
// }
// else if(temperature<=22.5)
// {
//     console.log("you got a Hypothermia");
// }
// else{
//     console.log("It's normal");
// }

//AGE 
// let age=prompt("Enter your age: ");
// if(age>=0 && age<=12)
// {
//     console.log("You are child");
// }
// else if(age>=13 && age<=19)
// {
//     console.log("You are teenager");
// }
// else if(age>=20 && age<=59)
// {
//     console.log("You are adult");
// }
// else
// {
//     console.log("you are senior citizen");
// }

//SIMPLE CALCULATER USING IF-ELSE-IF
let a=parseFloat(prompt("Enter the first number: "));
let b=parseFloat(prompt("Enter the Second number: "));
let operator=prompt("Enter the operators +,-,*,/");
if(operator==='+'){
   let sum=a+b;
    console.log("Sum is: ",sum);
}
else if(operator==='-'){
    let sub=a-b;
    console.log("Subtraction is: ",sub);
}
else if(operator==='*'){
    let  mul=a*b;
    console.log("Multplication is: ",mul);
}
else if(operator==='/'){
    if(b!==0)
    {
        let div=a/b;
        console.log("Division is: ",div);
    }
    else
    {
        console.log("We can not divide by 0");
    }    
}
else{
    console.log("!!! You have entered wrong input !!!");
}