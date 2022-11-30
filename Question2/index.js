const item = [
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, 
]

// 1. Filter and show the product that will be bought when you don't have much money I mean Cheap one
let cheapProduct = item[0].price;

for(let i = 1; i < item.length; i++) {
    if(item[i].price < cheapProduct) {
        cheapProduct = item[i].price;
    }
}

console.log("The cheapest product in the array costs: " + cheapProduct);



// 2 . Filter and show the product that will be expensive in the array
let expensiveProduct = item[0].price;

for(let i = 1; i < item.length; i++) {
    if(item[i].price > cheapProduct) {
        expensiveProduct = item[i].price;
    }
}

console.log("The most expensive product in the array costs: " + expensiveProduct);



// 3 . Calculate the full price of all product combined
let totalPrice = 0;

for(let i = 0; i < item.length; i++) {
    totalPrice += item[i].price;
}

console.log("The full price of all products combined: " + totalPrice);


// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar
let totalPriceAboveTenDollars = 0;

for(let i = 0; i < item.length; i++) {
    if(item[i].price >= 10) {
        totalPriceAboveTenDollars += item[i].price;
    }
}

console.log("The full price of all product combined without products that are under 10 dollars: " + totalPriceAboveTenDollars);