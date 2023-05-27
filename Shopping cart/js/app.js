let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Ball gown Wedding dress Formal wear Evening gown',
        image: '1.jpeg',
        price: 120
    },
    {
        id: 2,
        name: 'Cocktail dress Clothing Fashion Boutique',
        image: '2.jpeg',
        price: 120
    },
    {
        id: 3,
        name: 'Dress Evening gown Ball gown',
        image: '3.jpeg',
        price: 220
    },
    {
        id: 4,
        name: 'Cocktail dress Gown Prom Red',
        image: '4.jpeg',
        price: 120
    },
    {
        id: 5,
        name: 'womens pink and multicolored sleeveless dress',
        image: '5.jpeg',
        price: 320
    },
    {
        id: 6,
        name: 'Dresses, womens black sleeveless dress',
        image: '6.jpeg',
        price: 320
    },
    {
        id: 7,
        name: 'Little black dress Gown Clothing Wedding dress',
        image: '7.jpeg',
        price: 320
    },
    {
        id: 8,
        name: 'womens black sleeveless dress',
        image: '8.jpeg',
        price: 320
    },
    {
        id: 9,
        name: 'womens black and grey strapless sweetheart neckline dress',
        image: '9.jpeg',
        price: 320
    },
    {
        id: 10,
        name: 'Wedding dress Robe Gown Designer, Small fresh dress',
        image: '10.jpeg',
        price: 320
    },
    {
        id: 11,
        name: 'Dress Flower girl Evening gown Formal wear',
        image: '11.jpeg',
        price: 320
    },
    {
        id: 12,
        name: 'Prom Party dress Formal wear Evening gown',
        image: '12.jpeg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}