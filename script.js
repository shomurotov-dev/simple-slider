var prev = document.querySelector('.btn-prev');
var next = document.querySelector('.btn-next');
var img = document.querySelectorAll('.slider__img img');

let i = 0;

next.onclick = function () {
    img[i].style.display = 'none';
    i++;
    if (i >= 7) {    //sliderda 8 ta rasm bolganligi uchun i>=7 sharti qoyildi(index 0 dan boshlanadi) / The condition i>=7 was set because there are 8 images in the slider (index starts from 0)
        i = 0
        img[i].style.display = 'block';
    } else {
        img[i].style.display = 'block';
    }
}
prev.onclick = function () {
    img[i].style.display = 'none';
    i--;
    if (i <= 0) {
        i = 7;      //sliderda 8 ta rasm bolganligi uchun i>=7 sharti qoyildi(index 0 dan boshlanadi) / The condition i>=7 was set because there are 8 images in the slider (index starts from 0)
        img[i].style.display = 'block';
    } else {
        img[i].style.display = 'block';
    }
}