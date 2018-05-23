$(function() {

    $("#banner_wrap").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        dots: true,
        autoplay: false, //поменять на true
        autoplaySpeed: 3000,
        arrows: false
    });
});

const buttonMinus = document.querySelectorAll('.number-minus');
const buttonPlus = document.querySelectorAll('.number-plus');
let count = document.querySelectorAll('.number-count');

for (let i = 0; i < count.length; i++) {
    buttonMinus[i].onclick = function() {
        if (count[i].value > 1) {
            count[i].value -= 1;
        }
    }

    buttonPlus[i].onclick = function() {
        count[i].value = Number(count[i].value) + 1;
    }
}