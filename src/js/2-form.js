const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

savedForm();

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', onInput);

function onSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(LS_KEY);
    form.reset();
  }
}

function onInput(evt) {
  const { name, value } = evt.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
  }
}

function savedForm() {
  const savedData = JSON.parse(localStorage.getItem(LS_KEY));
  if (!savedData) {
    return;
  }
  formData.email = savedData.email;
  formData.message = savedData.message;
  formEl.elements.email.value = savedData.email;
  formEl.elements.message.value = savedData.message;
}
