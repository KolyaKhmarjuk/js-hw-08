import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('input'),
};
const LOCAL_KEY = 'feedback-form-state';
let formValue = {};

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(textareaInput, 500));

formSaveValue();

function textareaInput(event) {
  formValue[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formValue));
}

function formSaveValue() {
  const { message, email } = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (LOCAL_KEY) {
    refs.textarea.value = message;
    refs.input.value = email;
  }
}

function formSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
