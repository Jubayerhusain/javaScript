//Evente Handlers option 01
// function fullName() {
//     const full_name = document.getElementById('full-name');
//     full_name.innerText = 'Abdullah Ibna Jubayer (Rifat)';
// }
//Evente Handlers option 01
//using addEventListener
document.getElementById('NamUpdate').addEventListener('click', function () {
    const full_name = document.getElementById('full-name');
    full_name.innerText = 'Abdullah Ibna Jubayer (Rifat)';
})


document.getElementById('submit').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText)

    const yourName = document.getElementById('your-Name');
    yourName.innerText = inputText;
    inputField.value = '';

})


document.getElementById('email-submit').addEventListener('click', function () {
    const emailInputField = document.getElementById('email-input-field');
    const email_field = emailInputField.value;
    // console.log(email_field)
    const yourEmail = document.getElementById('your-email');
    yourEmail.innerText = email_field;
    emailInputField.value = ' ';


})

//comment box.....
document.getElementById('post-btn').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const commentValue = commentBox.value;
    console.log(commentValue)

    const commentContainer = document.getElementById('comment-container');
    const createElement = document.createElement('p');
    createElement.innerText = commentValue;
    commentContainer.appendChild(createElement);
    commentBox.value = '';


})