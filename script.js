var prev = document.querySelector('.btn-prev');
var next = document.querySelector('.btn-next');
var img = document.querySelectorAll('.slider__img img');

let i = 0;

next.onclick = function () {
    img[i].style.display = 'none';
    i++;
    if (i >= img.length) {
        i = 0
        img[i].style.display = 'block';
    } else {
        img[i].style.display = 'block';
    }
}
prev.onclick = function () {
    img[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = 7;
        img[i].style.display = 'block';
    } else {
        img[i].style.display = 'block';
    }
}
