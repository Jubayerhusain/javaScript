// problem 03 
function checkInputValue(value) {
    if (typeof value !== 'number') {
        return 'Invalid Input';
    } else {
        for (let i = 0; i < value.length; i++) {
            const character = value[i];
            if (character >= '0' && character <= '9') {
                // return true;
            }
        }
        return 'valid input';
    }
}
const Inputvalue = checkInputValue('500ass');
console.log(Inputvalue);