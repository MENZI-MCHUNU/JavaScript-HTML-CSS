const wrapper = document.querySelector(".sliderWrapper")

const products = [
    {
        id:1,
        title: "FRESH GRAPES",
        price: 40,
        img: "./product/fruits/grapes.jpeg"
    },
    {
        id:2,
        title: "FRESH VEGETABLES",
        price: 20,
        img: "./product/vegetables/broccoli.jpg" 
    },
    {
        id:3,
        title: "FRESH GOATS-MILK",
        price: 30,
        img: "./product/dairy/goats-milk.jpeg"
    },
    {
        id:4,
        title: "FRESH BOER-WORS",
        price: 200,
        img: "./product/butchery/thick-wors.jpeg"
    }
];

let product = products[0]

const productImage = document.querySelector(".productImg")
const productTitle = document.querySelector(".productTitle")
const productPrice = document.querySelector(".productPrice")

const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        //change the slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    
        //change the product
        product = products[index]

        // change description of each product
        productTitle.textContent = product.title
        productPrice.textContent = "R"+product.price
        productImage.src = product.img
    })
})