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

// multiArray();



//homework
//q1
const showSubject=()=>{
    let subject=["math","science","English","Economic","account"];
    console.log("Subjects are: "+subject);
}
// showSubject();

//q2
const manageCountries=()=>{
    let countries=["USA","UK","UAE","spain","Japan"];
    console.log("countries are "+countries);
    countries.pop();
    console.log("countries after pop "+countries);
    countries.push("Brazil");
    console.log("countries after push "+countries);
    countries.shift();
    console.log("countries after shift "+countries);
    countries.unshift("argentina");
    console.log("countries after unshift "+countries);
}
// manageCountries();

//q3
const printFriends=()=>{
    let friends=["Hermit","Kashib","sushan","aasutosh","pratik"];
    for(i=0;i<friends.length;i++){
        console.log(friends[i]);
    }
}
// printFriends();

//q4
const totalMarks=()=>{
    let marks=[68,54,66,74,69,67];
    sum=0;
    for(i=0;i<marks.length;i++){
        sum+=marks[i];
    }
    console.log("sum is ",sum);
}
// totalMarks();

//q5
const familyMembers=()=>{
    let family=[
        {
            name:"Mahendra Thapa",
            age:44,
            address:"Dhankuta",
        },
        {
            name:"Naina kala Thapa",
            age:43,
            address:"Dhankuta",
        },
        {
            name:"Aryan Thapa",
            age:19,
            address:"Dhankuta",
        },
        {
            name:"Denisha Thapa",
            age:14,
            address:"Dhankuta",
        },
        {
            name:"Bharat Thapa",
            age:75,
            address:"Dhankuta",
        }
    ]
    console.log(family);
}
// familyMembers();

//q6
const studentDetail=()=>{
    let student=[
        {
            name:"arpan",
            age:19,
            address:"kapan",
        },
        {
            name:"sandesh",
            age:19,
            address:"kathmandu",
        },
        {
            name:"rikki",
            age:19,
            address:"lalitpur",
        },
        {
            name:"Hemit",
            age:19,
            address:"morang",
        },
        {
            name:"Kashib",
            age:19,
            address:"nuwakot",
        },

    ]
    console.log(student);
}
studentDetail();