let changeStyles = document.getElementById('changeBackg');
let white = document.getElementsByClassName('white');
let intro = document.getElementsByClassName('intro');

let arrIntro = ['#F5F5F7','#FFF'];
let arrWhiteBg = ['#FFF', '#F5F5F7'];

let check = 1;

changeStyles.addEventListener('click', function () {
    if (check < arrIntro.length) {
        for (let i = 0; i < intro.length; i++) {
            intro[i].style.transition = '.5s';
            intro[i].style.backgroundColor = arrIntro[check];
        }
        // for (let i = 0; i < intro.length; i++) {
        //     changeStyles[i].style.transition = '.5s';
        //     changeStyles[i].style.backgroundColor = arrIntro[check];
        // }
        for (let i = 0; i < intro.length; i++) {
            changeStyles[i].style.transition = '.5s';
            changeStyles[i].style.backgroundColor = arrIntro[check];
        }
        for (let i = 0; i < white.length; i++) {
            white[i].style.transition = '.5s';
            white[i].style.backgroundColor = arrWhiteBg[check];
        }
        check++;
        if (check >= arrIntro.length) {
            check = 0;
        }
    }
})