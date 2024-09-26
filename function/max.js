// for array 
// const heights = [1, 45, 16, 14, 58, 56, 48, 46, 52, 85];
// const getmax = Math.max(...heights);
// console.log(getmax);

// normally 
// const getmax = Math.max(1, 12, 15, 52, 45);
// console.log(getmax);


// function getMax(numbers){
//     let max = numbers[0]
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }


// const number = [18, 45, 16, 14, 58, 56, 48, 46, 52, 85];
// const max = getMax(number);
// console.log('max value is', max);


function getMIn (numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min
}
const number = [18, 45, 16, 14, 58, 56, 48, 46, 52, 85];
const min = getMIn(number);
console.log('min value is', min);