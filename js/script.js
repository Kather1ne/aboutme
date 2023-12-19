var headName = document.querySelector('.name__helper');
var nameInfo = document.querySelector('.name__info');
var linksBtn = document.querySelector('.mylinks');
var links = document.querySelector('.links');
var buttonTxt = document.querySelector('.mylinks > span');

headName.onclick = function () {
    toogleClass(nameInfo, 'closed');
}
linksBtn.onclick = function () {
    toogleClass(links, 'open', 'Show', 'Hide');
}

function toogleClass(item, newClass, closeText, openText) {
    var classes = item.classList;
    if (classes.contains(newClass)) {
        classes.remove(newClass);
        switchText(closeText);
    }
    else {
        classes.add(newClass);
        switchText(openText);
    }
}

function switchText(text) {
    if (text) {
        setTimeout(function () {
            buttonTxt.innerHTML = text;
        }, 300);
    }
}
