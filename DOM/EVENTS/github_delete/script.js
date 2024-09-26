document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    // get confirmation 
    const deleteConfirm = event.target.value;
    console.log(deleteConfirm)
    // get button
    const btn_button = document.getElementById('btn-dlt');
    // give satement 
    if (deleteConfirm === 'delete') {
        btn_button.removeAttribute('disabled')
    } else {
        btn_button.setAttribute('disabled', true)
    }
})

document.getElementById('btn-dlt').addEventListener('click', function () {
    const myInfo = document.getElementById('my-info');
    myInfo.style.display = 'none';
})