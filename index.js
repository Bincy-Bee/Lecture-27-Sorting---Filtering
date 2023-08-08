let products = JSON.parse(localStorage.getItem("products")) || [];


const display=(data)=>{

    document.getElementById("page").innerHTML="";
    
    data.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.img;
        img.setAttribute("id", "p-img")

        let title = document.createElement("h5");
        title.innerHTML = ele.title;
        title.setAttribute("id", "p-h5")
        let price = document.createElement("h6");
        price.innerHTML = ele.price;
        price.setAttribute("id", "p-h6")
        let cat = document.createElement("p");
        cat.innerHTML = ele.cat;
        cat.setAttribute("id", "p-p")
        let btn = document.createElement("button")
        btn.innerHTML = "Add To Cart"
        btn.setAttribute("id","addtocart")

        let div = document.createElement("div");
        
        div.setAttribute("id","edit")

        div.append(img, title, price, cat,btn);
        document.getElementById("page").append(div);
        
    })
}
const productdata=(e)=>{
    e.preventDefault();

    let product ={
        img : document.getElementById("img").value,
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        cat : document.getElementById("cat").value,
    }
    products.push(product);
    console.log(products)
    localStorage.setItem("products", JSON.stringify(products));
    display(products);
}
display(products);

// DATA SORT (low to high)
const handellth=()=>{
    let data = products.sort((a,b)=>a.price-b.price);
    console.log(data);
    display(data);
}
// DATA SORT (low to high)
const handelhtl=()=>{
    let data = products.sort((a,b)=>b.price-a.price);
    console.log(data);
    display(data);
}

// DATA FILTER BY CATEGORY

const handelcategory=(cat)=>{
    console.log(cat);
    
    // BY Filter Method

    // let data = products.filter((item)=> item.cat == cat);
    // display(data); 


    // By For Loop Method 

    let temp = [];
    // for (let i = 0; i < products.length; i ++){
    //     if (products[i].cat == cat){
    //         temp.push(products[i]);
    //     }
    // }
    // display(temp);

    // BY Map Method

    products.map((ele)=>{
        if (ele.cat == cat){
            temp.push(ele);
        }
    })
    display(temp);
}
// Now We have use addEventListener Option 

let cat = [ "Men", "Women", "KIds"];

for (let i = 0; i < cat.length; i++){

    let btn = document.createElement("button");
    btn.innerHTML = cat[i];
    btn.setAttribute("id",cat[i]);

    document.getElementById("btns").append(btn);
}

for (let i = 0; i < cat.length; i ++){

    document.getElementById(cat[i]).addEventListener("click", ()=> handelcategory(cat[i]));
}


// document.getElementById("men").addEventListener("click", ()=> handelcategory("Men"));
// document.getElementById("women").addEventListener("click", ()=> handelcategory("Women"));
// document.getElementById("kids").addEventListener("click", ()=> handelcategory("KIds"));

document.getElementById("lth").addEventListener("click",handellth) // DATA SORT (low to high) call
document.getElementById("htl").addEventListener("click",handelhtl) // DATA SORT (low to high) call
document.querySelector("form").addEventListener("submit", productdata)


// Searching Function
const search=()=>{

    let val = document.getElementById("s-input").value;
    let data = products.filter((item)=> item.title.toLowerCase().match(val.toLowerCase()));
    display(data);
    // let data1 = products.filter((item)=> item.cat.toLowerCase().match(val.toLowerCase()));
    // display(data1);
}

document.querySelector("#search").addEventListener("click", search);

//Search fn used in search input.

document.querySelector("#s-input").addEventListener("keypress",(e)=>{

    console.log(e.key);

    if(e.key == "Enter"){
        search();
    }
})