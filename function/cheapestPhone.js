const phones = [
    { name:'sumsung', price: 21000, camera: '12mp', color: 'black' },
    { name:'xaomi', price: 25000, camera: '12mp', color: 'black' },
    { name:'oppo', price: 15000, camera: '12mp', color: 'black' },
    { name:'iphone', price: 150000, camera: '56mp', color: 'lightBlack' },
    { name:'walton', price: 12000, camera: '50mp', color: 'gray' }
]

function getCheapestPhone(phones){
    let minPhone = phones[0];
    for(const phone of phones){
        if(phone.price < minPhone.price){
            minPhone = phone;
        }
    }
    return minPhone
}

const getMinPhone = getCheapestPhone(phones);
console.log(getMinPhone);