
const formValidationModule = (() => {
  const init = () => {
    validatePassword();
    validateNames();
    validateEmail();
    validatePhone();
    controlButton();
    submit();
  };

  const validatePassword = () => {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const pattern = /\w{6,}|\d{6,}/gi;
    password.addEventListener('input', function () {
      if (!pattern.test(this.value)) {
        this.setCustomValidity('Password is too weak, should be at least 6 characters');
        this.reportValidity();
      } else if (this.value !== document.getElementById('passwordConfirm').value) {
        passwordConfirm.setCustomValidity('Password should match');
        passwordConfirm.reportValidity();
      } else {
        this.setCustomValidity('');
      }
    });
    passwordConfirm.addEventListener('input', function () {
      if (this.value !== document.getElementById('password').value) {
        this.setCustomValidity('Password should match');
        this.reportValidity();
      } else {
        this.setCustomValidity('');
      }
    });
    if (password.checkValidity() && passwordConfirm.checkValidity()) {
      return true;
    }
  };

  const validateNames = () => {
    const namesArray = [
      document.getElementById('firstName'),
      document.getElementById('lastName'),
    ];
    const pattern = /^[A-Za-z]{3,}$/;
    namesArray.forEach((input) => {
      input.addEventListener('input', () => {
        if (!pattern.test(input.value)) {
          input.setCustomValidity('This is not OK');
          input.reportValidity();
        } else {
          input.setCustomValidity('');
        };
      })
    });
  };

  const validateEmail = () => {
    const input = document.getElementById('email');
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    input.addEventListener('input', function () {
      if (!pattern.test(this.value)) {
        this.setCustomValidity('This is not a correct email');
        this.reportValidity();
      } else {
        this.setCustomValidity('');
      }
    })
  };

  const validatePhone = () => {
    const input = document.getElementById('phone');
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    input.addEventListener('input', function () {
      if (!pattern.test(this.value)) {
        this.setCustomValidity('This is not a correct number');
        this.reportValidity();
      } else {
        this.setCustomValidity('')
      }
    })
  };

  const controlButton = () => {
    const button = document.querySelector('form>button');
    button.setAttribute('disabled', '');
    window.addEventListener('keyup', () => {
      const inputs = document.querySelectorAll('form input');
      const array = Array.from(inputs);
      if (array.every((input) => input.checkValidity() && input.value !== '')) {
        button.removeAttribute('disabled', '');
      } else {
        button.setAttribute('disabled', '');
      }
    });
  };

  const submit = () => {
    const button = document.querySelector('form>button');
    const form = document.querySelector('form');
    button.addEventListener('click', () => {
      form.remove();
      const content = document.querySelector('div.content');
      const p = document.createElement('p');
      p.textContent = 'CONGRATS';
      content.prepend(p);
    });
  };

  return { init };
})();

window.onload = formValidationModule.init();
