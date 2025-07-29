const front = document.querySelector('.front');
const back = document.querySelector('.back');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = form.querySelector('.form__input');
  const strictEmail =
    /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x00-\x7F]|[^\\"])*")@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

  if (!strictEmail.test(emailInput.value)) {
    form.classList.add('form--error');
  } else {
    const emailToShow = back.querySelector('.back__content--bold');
    form.classList.remove('form--error');
    front.classList.add('front--hide');
    back.classList.remove('back--hide');
    emailToShow.textContent = emailInput.value;
  }
});
