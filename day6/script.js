function sayName(){
    let name=prompt("Enter your name");
    return name;
}
console.log(sayName());

//return type
function name(){
    return "aryan";
}
let hold=name();
console.log(hold);



const num=a=>{
    if(a%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
hold=num(7);
console.log(hold);