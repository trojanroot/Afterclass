// console.log("this is a function from external JS");

// function aryan(){
//     console.log("My name is Aryan Thapa ");
// }
// aryan();

// function info(){
//     console.log("Name: Aryna Thapa");
//     console.log("Age:19");
//     console.log("city:kathmandu");
// }
// info();

// function userinfo(name){
//     console.log("Name: "+name);
// }
// userinfo("Aryan");

// function info(name,age,city){
//     //console.log("Name: "+name +" ,Age: "+age +" city: "+city);
//     console.log("Name: "+name);
//     console.log("Age: "+age);
//     console.log("City: "+city);
// }
// info("Aryan",19,"Kathmandu");

// function multiplication(){
//     for(i=1;i<=10;i++){
//         console.log(5+"X"+i+"="+5*i);
//     }
// }
// multiplication();

// function pattern(){
//     for(i=1;i<=5;i++){
//         pattern="";
//         for(j=1;j<=i;j++){
//             pattern=pattern+"*";
//         }
//         console.log(pattern);
//     }
// }
// pattern();


//homework
//q1
function name(){
    console.log("My name is Aryan Thapa");
}
name();

//q2
function sum(a,b){
    sum=a+b;
    console.log("sum is "+sum);
}
sum(5,5);

//q3
function square(num){
    square=num*num;
    console.log("square is:",square);
}
square(5);

//q4
function greeting(name="Students"){
    console.log("name is ",name);
}
greeting("aryan");

//q5
const multiplication=(a,b)=>{
    mul=a*b;
    console.log("multiplication of two number  is ",mul);
}





//q6
function checker(number){
    if(number%2===0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
checker(25);

//q7
function division(a,b){
    div=a/b;
    console.log("Division of two number is",div);
}
division(a,b);


//q8
function addition(...q){
    let sum=0;
    // for(i=0;i<q.length;i++){
    //     sum=sum+q[i];
    // }
    for (let num of q){
        sum=sum+num;
    }
    console.log(sum);
}
addition(1,2,10,19,25,97);

//q9
let x=10;
function example(){
    y=80;
    console.log("global Number inside function is",x);
    console.log("Local number is ",y)
}
console.log("global Number outside function is",x);
example();

//q10
function result(marks){
    if(marks>=40){
        console.log("pass");
    }
    else{
        console.log("fail");
    }
}
marks=prompt("Enter the marks");
result(marks);