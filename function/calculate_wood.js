// chair --> 3 cft
// table --> 10 cft
// bed --> 50 cft

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perchairWood = 3;
    const pertablewood = 12;
    const perbedwood = 35;

    const chairTotalWood = chairQuantity * perchairWood ;
    const tableTotalWood = tableQuantity * pertablewood ;
    const bedTotalWood = bedQuantity * perbedwood ;

    const totalWood  = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

// const quantity = [5, 2, 2];
// const wood = woodQuantity(...quantity);

const wood = woodQuantity(5, 2, 2);
console.log(wood);



// per shirt price = 500 Tk 
// per pant price = 900 Tk
// and shoe price = 1500 Tk

function dressWood(shirt, pant, shoe){
    const perShirtPrice = 500;
    const perPantPrice = 900;
    const ShoePrice = 1500;

    const totalShirtPrice = perShirtPrice*shirt;
    const totalPantPrice = perPantPrice*pant;
    const totalShoePrice = ShoePrice*pant;

    const totalPrice  = totalPantPrice + totalShirtPrice + totalShoePrice
    return totalPrice;
}
const allDress = [3, 4, 2];
const totalCount = dressWood(...allDress);
console.log(totalCount);