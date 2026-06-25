//  let a=Number(prompt("Enter the first number: "));
//     let b=Number(prompt("Enter the second number: "));
//     let operator=prompt("Enter the operator +,-,*,/ ");
// function table(){
//     if(operator==='+')
//     {
//         console.log(`the sum is: ${a+b}`);
//     }
//     else if(operator==='-')
//     {
//         console.log(a-b);
//     }
//     else if(operator==='*')
//     {
//         console.log(a*b);
//     }
//     else if(operator==='/')
//     {
//         console.log(a/b);
//     }
//     else{
//         console.log("invalid input");
//     }
// }

// table();



// const name=()=>{
//     console.log("Aryan Thapa");
// }
// name();

// let a=Number(prompt("Ente the first number: "));
// let b=Number(prompt("Enter the second number: "))
// const sum=(a,b)=>{
//     console.log("Sum is: ",a+b);
// }
// sum(a,b);

// const sub=(a,b)=>{

//     console.log("Subtraction is: ",a-b);
// }
// sub(a,b);



const movie=()=>{
    let movieName=["KGF","RRR","Iron man","Spiderman"];   
    console.log("Before change "+movieName);
    // console.log(movieName.length);
    // movieName[0]="Aryan";
    // console.log("After Change "+movieName);
}
// movie();
const game=()=>{
    let games=["RDR2","GTA5","GOW","FC","PUBG"];
    console.log(games.length);
}
// game();
const food=()=>{
    let foodName=["MO:MO","Chowmin","Fried Rice","Chikenleg piece","chiken chilly"];
    console.log(foodName.length );
}
// food();


const name=()=>{
    let firstName=["pujan","sambhav","Rikki","Sushan","Hermit"];
    console.log("Before change "+   firstName);
    firstName.push("Aayush");
    firstName[0]="Bhattrai";
    firstName[1]="mahara";
    firstName[2]="Tamang";
    firstName[3]="Turkey";
    firstName[4]="shrestha";
    console.log("After Change "+ firstName);
}
name();

const fruit=()=>{
    let fruitName=["Apple","Orange","Mango","peas"];
    console.log("Before Push "+fruitName);
    fruitName.push("Banana");
    console.log("Before POP "+fruitName);
    fruitName.pop();
    console.log("After POP "+fruitName);
}
fruit();