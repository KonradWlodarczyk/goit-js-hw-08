import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();

  const {elements: { email, message },} = event.target;

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(currentStorage);

  localStorage.removeItem(currentStorage);

  event.target.reset();
}

const currentStorage = 'feedback-form-state';
const loadCurrentStorage = localStorage.getItem(currentStorage);

let formData = JSON.parse(loadCurrentStorage);
if (formData === null) {
  formData = {
    email: '',
    message: '',
  };
}

printFormData(formData);

function printFormData(storage) {
  document.querySelector('input[name=email]').value = storage.email;
  document.querySelector('textarea[name=message]').textContent = storage.message;
}

form.addEventListener('input', throttle(logInputedString, 500));

function logInputedString(event) {
  const name = event.target.name;
  const value = event.target.value;
  switch (name) {
    case 'email':
      loggingEmailMessage(name, value);
      break;

    case 'message':
      loggingEmailMessage(name, value);
      break;

    default:
      break;
  }
}

function loggingEmailMessage(name, value) {
  formData[name] = value;

  localStorage.setItem(currentStorage, JSON.stringify(formData));
}