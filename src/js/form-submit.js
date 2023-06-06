import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.footer__form'),
  inputName: document.querySelector('.footer__form .name'),
  inputTel: document.querySelector('.footer__form .tel'),
  inputMail: document.querySelector('.footer__form .mail'),

  textarea: document.querySelector('.footer__form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.inputName.addEventListener('input', throttle(onFormInput, 500));
refs.inputTel.addEventListener('input', throttle(onFormInput, 500));
refs.inputMail.addEventListener('input', throttle(onFormInput, 500));

refs.textarea.addEventListener('input', throttle(onFormInput, 500));

const formData = {};
populateTextInputs();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextInputs() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedText);

  if (savedText) {
    Object.entries(savedText).forEach(([name, value]) => {
      formData[name] = value;
      refs.form.elements[name].value = value;
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  window.location.href = './thank-you-page.html';
}
