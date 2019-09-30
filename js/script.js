var headName = document.querySelector('.name__helper');
var nameInfo = document.querySelector('.name__info');

headName.onclick = function() {
    if(nameInfo.classList.contains('closed')){
        nameInfo.classList.remove('closed');
    }
    else {
        nameInfo.classList.add('closed');
    }
}