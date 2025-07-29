c
onst form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = form.querySelector('.form__input');
  const strictEmail =
    /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x00-\x7F]|[^\\"])*")@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

  if (!strictEmail.test(emailInput.value)) {
    form.classList.add('form--error');
  } else {
    form.classList.remove('form--error');
  }
});
