document.querySelector('.select-selected').addEventListener('click', function() {
    document.querySelector('.select-items').classList.toggle('select-hide');
});

document.querySelectorAll('.select-items div').forEach(function(item) {
    item.addEventListener('click', function() {
        const selectedText = item.innerText;
        document.querySelector('.select-selected').innerText = selectedText;
        document.querySelector('.select-items').classList.remove('select-hide');
document.querySelector('.city').style.color = '#65777f'
    });
});