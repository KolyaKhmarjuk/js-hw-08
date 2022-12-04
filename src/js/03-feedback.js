import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea')
}

refs.form.addEventListener('submit', formSubmit);
refs.textarea.addEventListener('input', throttle(textareaInput, 500));

textareaTextSave();

function formSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function textareaInput(event){
    const message = event.target.value;
    localStorage.setItem('feedback-form-state', message);
}

function textareaTextSave() {
    const saveMsg = localStorage.getItem('feedback-form-state')
    if(saveMsg){
        refs.textarea.value = saveMsg;
    }
}

