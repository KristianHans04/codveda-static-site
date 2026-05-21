/* Real-time contact form validation */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = {
    name: {
      el: document.getElementById('contact-name'),
      errorEl: document.getElementById('name-error'),
      validate: function (val) {
        return val.trim().length >= 2;
      }
    },
    email: {
      el: document.getElementById('contact-email'),
      errorEl: document.getElementById('email-error'),
      validate: function (val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
      }
    },
    subject: {
      el: document.getElementById('contact-subject'),
      errorEl: document.getElementById('subject-error'),
      validate: function (val) {
        return val !== '';
      }
    },
    message: {
      el: document.getElementById('contact-message'),
      errorEl: document.getElementById('message-error'),
      validate: function (val) {
        return val.trim().length >= 10;
      }
    }
  };

  function showError(field) {
    field.el.parentElement.classList.add('error');
  }

  function clearError(field) {
    field.el.parentElement.classList.remove('error');
  }

  function validateField(field) {
    var isValid = field.validate(field.el.value);
    if (isValid) {
      clearError(field);
    } else {
      showError(field);
    }
    return isValid;
  }

  /* Real-time validation on blur */
  Object.keys(fields).forEach(function (key) {
    var field = fields[key];
    field.el.addEventListener('blur', function () {
      validateField(field);
    });
    field.el.addEventListener('input', function () {
      if (field.el.parentElement.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var allValid = true;

    Object.keys(fields).forEach(function (key) {
      if (!validateField(fields[key])) {
        allValid = false;
      }
    });

    if (allValid) {
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent';
      btn.style.background = 'linear-gradient(135deg, var(--color-success), #059669)';
      btn.disabled = true;
      setTimeout(function () {
        form.reset();
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }
  });
})();
