// for loop 
// const numbers = [12, 13, 14, 15, 16, 17, 18];
// const rev_num = [];
// for(let i = 0; i<numbers.length; i++ ){
//     const num = numbers[i];
//     rev_num.unshift(num);
// }
// console.log(rev_num);

// for of loop 
const numbers = [12, 13, 14, 15, 16, 17, 18];
const rev_num = [];
for(let num of numbers){
    rev_num.unshift(num)
}
console.log(rev_num);