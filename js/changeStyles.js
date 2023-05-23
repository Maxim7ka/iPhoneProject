let changeStyles = document.getElementById('changeStyles');
let white = document.getElementsByClassName('white');
let intro = document.getElementsByClassName('intro');

let arrIntro = ['#F5F5F7', '#C0C0C0'];
let arrWhiteBg = ['#FFF', '#F5F5F7'];
let arrChangeStyles = ['#F5F5F7', '#FFF'];

let check = 1;

changeStyles.addEventListener('click', function () {
    if (check < arrWhiteBg.length) {
        for (let i = 0; i < intro.length; i++) {
            intro[i].style.transition = '.5s';
            intro[i].style.backgroundColor = arrIntro[check];
        }

        changeStyles.style.transition = '.5s';
        changeStyles.style.backgroundColor = arrChangeStyles[check];
        
        for (let i = 0; i < white.length; i++) {
            white[i].style.transition = '.5s';
            white[i].style.backgroundColor = arrWhiteBg[check];
        }
        check++;
        if (check >= arrWhiteBg.length) {
            check = 0;
        }
    }
})