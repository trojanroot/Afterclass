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
// name();

const fruit=()=>{
    let fruitName=["Apple","Orange","Mango","peas"];
    console.log("Before Push "+fruitName);
    fruitName.push("Banana");
    console.log("Before POP "+fruitName);
    fruitName.pop();
    console.log("After POP "+fruitName);
}
// fruit();


//Homework
//1
const showFood=()=>{
    let food=["Mo:MO","chowmein","Burger"];
    console.log(food);
}
// showFood();

//2
const showCountries=()=>{
    let country=["USA","UK","Australia","Argentina","Spain"];
    console.log(country);
}
// showCountries();

//3
const showFirstColor=()=>{
    let colors=["Red","Yellow","Blue"];
    console.log("First color is "+colors[0]);
}
// showFirstColor();

//4
const showLastSubject=()=>{
    let subjects=["English","Ecomonic","Account","Computer"];
    console.log("Last Subject is "+subjects[3]);
}
// showLastSubject();

//5
const changeColor=()=>{
    let color=["Red","Yellow","Blue","Green"];
    console.log("Name of Colors before change "+color);
    color[1]="Pink";
    console.log("Name of Colors after change "+color);
}
// changeColor();

//6
const changeFriend=()=>{
    let friends=["Kashib","Hermit","Sushan","Sulav"];
    console.log("before replace "+friends);
    friends[3]="Aayush";
    console.log("After Replace "+friends);
}
changeFriend();

//7
const countFoods=()=>{
    let food=["Mo:Mo","Chowmein","burger","sandwich","Pizza"];
    console.log("Total Foods are: "+food.length);
}
countFoods();

//8
const countFriends=()=>{
    let friends=["Kashib","Hermit","Sushan","Sulav","Aayush","Tufan","Arpan"];
    console.log("Total Friends are "+friends.length);
}
countFriends();

//9
const addCountry=()=>{
    let country=["Nepal","UK","Australia","Argentina","USA"];
    country.push("Spain","UAE");
    console.log("Country after Adding "+country);
}
addCountry();

//10
const addColoor=()=>{
    let color=["Red","Yellow","Blue","Green","Black"];
    color.push("White","Pink","Brown");
    console.log("Colors after adding "+color);
}
addColoor();

//11
const removeCountry=()=>{
    let country=["Nepal","UK","Australia","Argentina","USA","Spain","UAE"];
    country.pop();
    console.log("after Removing last country "+country);
}
removeCountry();

//12
const removeGame=()=>{
    let game=["RDR2","GTA5","FC26","PUBG","God of War","COC"];
    game.pop();
    console.log("after removing last game "+game);
}
removeGame();