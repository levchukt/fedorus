// Отримуємо елементи
const openButton = document.getElementById('openButton');
const callBtn = document.getElementById('call');
const inputForm = document.getElementById('inputForm');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submitButton');
const userInput = document.getElementById('userInput');
const menuBtn = document.querySelector('.press')
function openForm() {
    inputForm.style.display = 'block';
    overlay.style.display = 'block';
}

        // Відкриваємо вікно введення при натисканні кнопки
openButton.addEventListener('click', openForm);
callBtn.addEventListener('click', openForm);
menuBtn.addEventListener('click', openForm);

        // Закриваємо вікно введення при натисканні кнопки "Закрити"
closeButton.addEventListener('click', () => {
    inputForm.style.display = 'none';
    overlay.style.display = 'none';
    userInput.value = ''; // Очищаємо поле введення
});

// Обробка підтвердження введення
submitButton.addEventListener('click', () => {
    const inputValue = userInput.value;
    alert(`Ви ввели: ${inputValue}`); // Тут можна обробити введені дані
    inputForm.style.display = 'none';
    overlay.style.display = 'none';
    userInput.value = ''; // Очищаємо поле введення
});

        // Закриття вікна при кліку на затемнене поле
overlay.addEventListener('click', () => {
    inputForm.style.display = 'none';
    overlay.style.display = 'none';
    userInput.value = ''; // Очищаємо поле введення
});