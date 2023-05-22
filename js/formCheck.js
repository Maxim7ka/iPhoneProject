let formName = document.getElementById('formName');
let formPhoneNumber = document.getElementById('formPhoneNumber');
let formSubmitButton = document.getElementById('formSubmitButton');

formSubmitButton.onclick = function (event) {
    if (formName.value == "" || formPhoneNumber.value == "") {
        alert("Пожалуйста, введите Ваши имя и номер телефона.");
    }
    event.preventDefault();
}