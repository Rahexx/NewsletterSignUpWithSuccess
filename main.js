const front = document.querySelector('.front');
const back = document.querySelector('.back');
const form = front.querySelector('.form');
const emailToShow = back.querySelector('.back__content--bold');
const dissmissedButton = back.querySelector('.back__dismissed');

const strictEmail =
  /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x00-\x7F]|[^\\"])*")@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

function resetModal() {
  front.classList.remove('front--hide');
  back.classList.add('back--hide');
  form.reset();
}

function handleSubmitForm(e) {
  e.preventDefault();

  const emailInput = form.querySelector('.form__input');

  if (!strictEmail.test(emailInput.value)) {
    form.classList.add('form--error');
  } else {
    form.classList.remove('form--error');
    front.classList.add('front--hide');
    back.classList.remove('back--hide');
    emailToShow.textContent = emailInput.value;
  }
}

form.addEventListener('submit', handleSubmitForm);
dissmissedButton.addEventListener('click', resetModal);
