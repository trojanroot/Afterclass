const usingforEach=()=>{
    const numbers=[1,2,3,4,5,6,7];

    numbers.forEach(function(element){
        // console.log(element);
    });

    numbers.forEach((element)=>{
        console.log("Using Arrow Function ",element);
    });
};
usingforEach();

const listofLaptop=()=>{
    let laptop=["lenovo","Acer","Macbook","Dell","HP"];
    laptop.forEach((arr)=>{
        console.log("names are: ",arr);
    })
}

listofLaptop();

const listofMobiles=()=>{
    let mobile=["SAMSUNG","iphone","Redmi","VIVO","Realme"];
    mobile.forEach(function(i){
        console.log(i);
    });
};
listofMobiles();

const listofFruits=()=>{
    let fruits=["apple","banana","orange","mango","pineapple","watermelon","litchi","strawberry","guava","grapes"];
    fruits.forEach((elements)=>{
        console.log("list of fruits are: ",elements);
    });
};
listofFruits();

const listofProduct=()=>{
    let product=[
        {
            id:1,
            name:"Women linen Kurti=ivory gold",
            rating:"5star",
            price:2999,
            discountedPrice:2249,
            inStock:true,
            description:"",
            size:{
                small: "S",
                medium: "M",
                large: "L",
                extraLarge: "XL",

            },
            color:{
                color1:"ivory",
                color2:"cream",
                color3:"light gold",
                color4:"orange",
            },
            facbric:"linen brand",
            fit:{
                fit1:"straightFit",
                fit2:"RegularFit",
            },
        }
    ];
    console.log(product);
    product.forEach((elements)=>{
        console.log(elements.id);
        console.log(elements.name);
        console.log(elements.rating);
        console.log(elements.price);
        console.log(elements.inStock);
        console.log("---------------------------");
    })
    
}
listofProduct();
