import throttle from 'lodash.throttle';

const FORM_STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const onSaveInfo = event => {
  checkUserInfo[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STORAGE, JSON.stringify(checkUserInfo));
};

const takeUserInfo = JSON.parse(localStorage.getItem(FORM_STORAGE));
const checkUserInfo = takeUserInfo ?? {};

const saveData = obj => {
  if (!obj) return;
  document.querySelector('[name="email"]').value = obj.email;
  document.querySelector('[name="message"]').value = obj.message;
};

const onSubmitForm = e => {
  e.preventDefault();
  console.log('User info:', checkUserInfo);
  e.target.reset();
  localStorage.removeItem(FORM_STORAGE);
};

saveData(takeUserInfo);
refs.form.addEventListener('input', throttle(onSaveInfo, 500));
refs.form.addEventListener('submit', onSubmitForm);
