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

let age=prompt("Enter your age: ");
if(age>=0 && age<=12)
{
    console.log("You are child");
}
else if(age>=13 && age<=19)
{
    console.log("You are teenager");
}
else if(age>=20 && age<=59)
{
    console.log("You are adult");
}
else
{
    console.log("you are senior citizen");
}
