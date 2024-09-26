// <!-- inline onclick way no 01 -->
{
    /* <button onclick="document.body.style.backgroundColor = 'red'"> */
}

// way 02 important
function bgGreen() {
    document.body.style.backgroundColor = 'green';

}
// way 03 
const bg_Blue = document.getElementById('bg-blue');
bg_Blue.onclick = bgBlue;

function bgBlue() {
    document.body.style.backgroundColor = 'blue'
}
// way 04
const bg_yellow = document.getElementById('bg-yellow')
bg_yellow.onclick = function bgYelllow() {
    document.body.style.backgroundColor = 'yellow'
}

// <!--addEventsListener click way no 01 -->
const bg_purple = document.getElementById('bg-purple');
bg_purple.addEventListener('click', bgPurple);

function bgPurple() {
    document.body.style.backgroundColor = 'purple'
}
// <!--addEventsListener click way no 02 -->
// const bg_pink = document.getElementById("bg-pink");
// bg_pink.addEventListener("click", function () {
//     document.body.style.backgroundColor = 'pink';
// });

// or
// this code important we will use this code every time..
//final option for 
document.getElementById('bg-pink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})