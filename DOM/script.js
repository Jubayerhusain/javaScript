// getElementsByTagName
// console.log(document.getElementsByTagName('h1')
const tagNm = document.querySelector('h1')
tagNm.style.color = 'blue';
// )

// getElementsByClass 
let studentList = document.getElementsByClassName('students')
// console.log(studentList);
// for(let student of studentList){
//     student
//     console.log(student);
// }

const heading3 = document.querySelector('h3')
heading3.style.color = 'green';
heading3.style.fontSize = '60px';

// console.log(document.getElementById('h1'));
const useStyle = document.getElementById('h1');
console.log(useStyle.style.fontSize = '50px')
const useStyle2 = document.getElementById('h2');
console.log(useStyle2.style.color = 'red')
console.log(useStyle2.style.fontSize = '70px')





const useStyle3 = document.querySelector('#fs');
useStyle3.style.color = 'red';


const useStyle4 = document.querySelector('.cl');
    useStyle4.style.color = 'red';


const sections = document.getElementById('section');
sections.style.color = 'green';
sections.style.fontSize = '35px';