// for in loop to object 
// for of loop to array 

// using for in loop......... 
const mobile = {
    brand: 'sumsung',
    price: '25500tk',
    color: 'black'
}
// console.log(mobile)
for(const property in mobile){
    console.log(property)
    console.log(mobile[property])
}

// or we can use keys 
// const keys = Object.keys(mobile);
// console.log(keys);
// for(const key in keys){
//     console.log(key);
// }



// Problem 5 

function  waitingTime(waitingTimes  , serialNumber) {


    

}
const allTimes = [3, 5, 7, 11, 6];
const serialNumber = 10;
console.log(waitingTime(allTimes, serialNumber)); 