// const products = [
//     {name: 'freshWash', price: 500},
//     {name: 'Shirt', price: 1000},
//     {name: 'pant', price: 1500},
//     {name: 'pen', price: 150}
// ]

// function getCost(products){
//     let totalCost = 0;
//     for(const product of products){
//         totalCost = totalCost + product.price
//     }
//     return totalCost;
// }
// const totalCost = getCost(products);
// console.log(totalCost)

const products = [
    {name: 'freshWash', price: 500, quantity: 4},
    {name: 'Shirt', price: 1000, quantity: 2},
    {name: 'pant', price: 1500, quantity: 3},
    {name: 'pen', price: 150, quantity: 10}
]

function getCost(products){
    let totalCost = 0;
    for(const product of products){
        const perProductCost  = product.price*product.quantity;
        totalCost = totalCost + perProductCost;
    }
    return totalCost;
}
const totalCost = getCost(products);
console.log(totalCost)