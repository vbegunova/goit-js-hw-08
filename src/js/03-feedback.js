import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const localData = JSON.parse(localStorage.getItem(KEY)) ?? {
  email: '',
  message: '',
};
const emailInput = document.querySelector('[name = email]');
const messageInput = document.querySelector('[name = message]');
emailInput.value = localData.email;
messageInput.value = localData.message;

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
  const { email, message } = form.elements;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(KEY, JSON.stringify(data));
}

function onSubmit(evt) {
  evt.preventDefault();
  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const data = {
      email: email.value,
      message: message.value,
    };

    console.log(data);
    evt.currentTarget.reset();
    localStorage.clear();
  }
}
