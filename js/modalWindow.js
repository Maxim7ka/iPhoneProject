let buttonModal = document.querySelector('.intro-content .choose');
let modalWindow = document.getElementById('modalWindow');
let modalClose = document.getElementById('modalClose');
let modalContent = document.getElementById('modalContent');

buttonModal.onclick = function () {
    modalWindow.style.opacity = '1';
    modalWindow.style.visibility = 'visible';
    modalWindow.style.transform = 'translateX(0)';
}

modalClose.onclick = function () {
    modalWindow.style.opacity = '0';
    modalWindow.style.visibility = 'hidden';
    modalWindow.style.transform = 'translateX(50%)';
}

window.addEventListener('click', (event) => {
    if (event.target == modalWindow) {
        modalWindow.style.opacity = '0';
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.transform = 'translateX(50%)';
    }
})