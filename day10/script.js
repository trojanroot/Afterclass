const usingforEach=()=>{
    const numbers=[1,2,3,4,5,6,7];

    numbers.forEach(function(element){
        // console.log(element);
    });

    numbers.forEach((element)=>{
        console.log("Using Arrow Function ",element);
    });
};
//usingforEach();

const listofLaptop=()=>{
    let laptop=["lenovo","Acer","Macbook","Dell","HP"];
    laptop.forEach((arr)=>{
        console.log("names are: ",arr);
    })
}

//listofLaptop();

const listofMobiles=()=>{
    let mobile=["SAMSUNG","iphone","Redmi","VIVO","Realme"];
    mobile.forEach(function(i){
        console.log(i);
    });
};
//listofMobiles();

const listofFruits=()=>{
    let fruits=["apple","banana","orange","mango","pineapple","watermelon","litchi","strawberry","guava","grapes"];
    fruits.forEach((elements)=>{
        console.log("list of fruits are: ",elements);
    });
};
//listofFruits();

//list of 5 product like id 1
const listofProduct=()=>{
    let product=[
        {
            id:1,
            name:"Women linen Kurti=ivory gold",
            rating:"5star",
            price:2999,
            discountedPrice:2249,
            inStock:true,
            description:"An elegant ivory gold kurti designed for grateful everyday styling and specific occasions. The soft kinen blend  gives a breathable and lightweight feel, when the minimal thnnic finish adds a premimum Nepali clothing touch . perfect for office ,casual outing , family gathering and festival moments",
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
        },
        {
            id:2,
            name:"Women Cotton Slub Kurti-Mustard Yellow",
            rating:"3.5star",
            price:2599,
            discountedPrice:2049,
            inStock:true,
            description:"A vibrant mustard yellow cotton slub kurti designed with a clean silhouette and fine detailing. Soft, lightweight, and breathable, it's an ideal choice for everyday comfort with a stylish finish.",
            size:["s","m","l","xl"],
            color:[
                "Dusty Rose",
            ],
            facbric:"cotton slub",
            fit:[
                "straightFit",
                "RegularFit",
            ],
        },
        {
            id:3,
            name:"Women Cotton Kurti - Sage Green",
            rating:"3star",
            price:2499,
            discountedPrice:1999,
            inStock:true,
            description:"A refreshing sage green cotton kurti designed for effortless everyday elegance. Crafted with breathable fabric and subtle embroidery, it offers comfort and sophistication for office wear, casual outings, and festive gatherings.",
            size:["s","l","xl"],
            color:[
                "Wine Maroon",
                "Charcoal Grey",
                "Blush Pink",
            ],
            facbric:"100% Premium Cotton",
            fit:[
                "straightFit",
                "RegularFit",
            ],
        },
        {
                id:4,
            name:"Women Linen Kurti - Blush Pink",
            rating:"4.5star",
            price:2599,
            discountedPrice:2249,
            inStock:false,
            description:"An elegant blush pink linen kurti tailored for modern women who appreciate timeless fashion. The breathable linen blend provides a luxurious feel, making it perfect for work, brunches, and special occasions.",
            size:["s","m","l","xl"],
            color:[
                "Emerald Green",
                "Pearl White",
            ],
            facbric:"linen brand",
            fit:[
                "Straight fit",
            ],
        },
        {
                id:5,
            name:"Women Viscose Kurti-Lavender Mist",
            rating:"4star",
            price:2799,
            discountedPrice:2399,
            inStock:true,
            description:"A sophisticated lavender mist viscose kurti that combines elegance with comfort. Its silky-soft texture and contemporary styling make it suitable for office wear, casual meetups, and evening outings.",
            size:{
                small:"s",
                meduium:"m",
                large:"l",
                extraLarge:"xl"
            },
            color:{
                color1:"Rust Orange",
                color2:"Teal Blue",
                color3:"Mocha Brown",
                color4:"Olive Green",
            },
            facbric:"linen brand",
            fit:{
               fit1:"Straight fit",}
            ,
        }
    ];
    // console.log(product);
    product.forEach((elements)=>{
        console.log("    ");
        console.log(elements.id);
        console.log(elements.name);
        console.log(elements.rating);
        console.log(elements.price);
        console.log(elements.discountedPrice);
        console.log(elements.inStock);
        console.log(elements.description);
        console.log(elements.size);
        console.log(elements.color);
        console.log(elements.facbric);
        console.log(elements.fit);
        console.log("");
        console.log("---------------------------");


    })
    
}
listofProduct();
