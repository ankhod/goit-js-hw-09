// Об'єкт для зберігання даних форми
let formData = { email: '', message: '' };

// Посилання на форму
const form = document.querySelector('.feedback-form');

// Функція для збереження даних у локальному сховищі
function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для завантаження даних з локального сховища
function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}

// Відстеження змін у полях форми
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});

// Завантаження даних при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

// Перевірка і обробка сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
});
