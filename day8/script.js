const tree=()=>{
    let trees=["apple tree ","mango tree ","orange tree ","lemon tree ","coconut tree ","oak tree ","pepal tree ","Banyan tree ","Neem tree ","babul "];
    console.log("trees are: "+trees);
    trees.push("litchi");
    console.log("trees are push : "+trees);
    trees.pop();
    console.log("trees are pop : "+trees);
}
// tree();
const country=()=>{
    let countries=["USA","UK","Austrila","japan","spain"];
    console.log("name before shift "+countries);
    countries.shift();
    console.log("name after shift "+countries);
    countries.unshift("UAE");
    console.log("name after unshift "+countries);
}
// country();
const games=()=>{
    let games=["COC","GTA5","GOW","FC25","RDR2"];
    console.log("name before shift "+games);
    games.shift();
    console.log("name after shift "+games);
}

// games();


const addcountry=()=>{
    let countries=["USA","UK","Austrila","japan","spain"];
    console.log("name before unshift "+countries);
    countries.unshift("UAE");
    console.log("name after unshift "+countries);
}
// addcountry();

const addColor=()=>{
    let color=["Blue","Green","Red","Yellow","Brown"];
    console.log("name before unshift "+color);
    color.unshift("pink");
    console.log("name after unshift "+color);
}
// addColor();

const printTrees=()=>{
     let trees=["apple tree ","mango tree ","orange tree ","lemon tree ","coconut tree ","oak tree ","pepal tree ","Banyan tree ","Neem tree ","babul "];
    //  
    for(let i=0;i<trees.length;i++){
        console.log(trees[i]);
    }
}
// printTrees();

const multiArray=()=>{
    let array=[
        {
            id:1,
            name:"aryan",
            address:"kapan",
        },
        {
            id:2,
            name:"sandesh",
            address:"kathmandu",
        },
        {
            id:3,
            name:"rikki",
            address:"lalitpur",
        }
    ]
    console.log(array);
}

multiArray();
