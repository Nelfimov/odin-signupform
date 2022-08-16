const inputsPassword = document.querySelectorAll('input[type="password"]');
const spanError = document.querySelector('span.error');

inputsPassword.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (index === 0) {
      if (input.value === inputsPassword[index + 1].value && input.value != '') {
        inputsPassword.forEach(item => item.classList.toggle('error'))
        spanError.classList.toggle('error');
      } else {
        inputsPassword.forEach((item) => {
          item.classList.add('error');
          spanError.classList.add('error');
        })
      }
    } else {
      if (input.value === inputsPassword[index - 1].value && input.value != '') {
        inputsPassword.forEach(item => item.classList.toggle('error'))
        spanError.classList.toggle('error');
      } else {
        inputsPassword.forEach((item) => {
          item.classList.add('error');
          spanError.classList.add('error');
        })
      }
    }
  })
})