const  watch=()=>{
    let names=["Rolex","casio","timex","Seiko"];
    names.push("Tissot ");
    console.log(names);
    names.pop();
    console.log(names);
    names.unshift("Tissot ");
    console.log(names);
    names.shift();
    console.log(names);
    for(i=0;i<names.length;i++){
        console.log(names[i].toUpperCase());
    }
}
// watch();
const citieslist=()=>{
    let citieslist=["kathmandu","pokhara","lalitpur","Bhaktapur","Dharan"];
    for(i=0;i<citieslist.length;i++){
        console.log(citieslist[i].toUpperCase());
    }
}
// citieslist();
const primartnum=(num)=>{
    let count=0;
    for(i=1;i<=num;i++){
        if(num%i===0){
             count++;
        }
    }
    if(count==2){
        console.log("it is a prime number");
    }
    else{
        console.log("it is not a prime number");
    }
}
// primartnum(7);
const primartnum1=()=>{
    for(let num=1;num<=20;num++){
     let count=0;
     for(let i=1;i<=num;i++){
        if(num%i===0){
            count++
        }
     }
     if(count===2){ 
        console.log(num);
     } 
}
}
// primartnum1();

const production=()=>{
    let products=[
    {
        id:1,
        name:"iphone 17",
        batchid:192610,
        color:{
            primary:"black",
            secondary:"white",
            teritary:"Pink"
        },
        storage:"1TB",
    },
    {
        id:2,
        name:"Samsung 26",
        batchid:123567,
        color:{
            primary:"black",
            secondary:"white",
            teritary:"Blue"
        },
        storage:"2TB",
    },
    {
        id:3,
        name:"Iphone X",
        batchid:101010,
        color:{
            primary:"White",
            secondary:"Black",
        },
        storage:"512GB",
    },
    {
        id:4,
        name:"Iphone 7",
        batchno:203798,
        color:{
            primary:"piink",
            secondary:"blue",
        },
        storage:"128GB",
    },
    {
        id:5,
        name:"Samsung 25",
        batchno:569741,
        coolor:{
            primmary:"red",
            secondary:"white",
        },
        storage:"1TB",
    }
]
console.log(products);
}
production();;