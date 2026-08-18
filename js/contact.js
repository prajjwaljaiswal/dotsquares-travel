document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('enquiry-form');
  var successBox = document.getElementById('success-confirmation');
  var sendAnotherBtn = document.getElementById('send-another-btn');

  var fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      required: true,
      label: 'Full Name'
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      required: true,
      label: 'Email Address',
      isEmail: true
    },
    subject: {
      input: document.getElementById('subject'),
      error: document.getElementById('subject-error'),
      required: true,
      label: 'Subject'
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      required: true,
      label: 'Message'
    }
  };

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function clearError(fieldKey) {
    var field = fields[fieldKey];
    field.error.textContent = '';
    field.input.classList.remove('input-error');
  }

  function setError(fieldKey, message) {
    var field = fields[fieldKey];
    field.error.textContent = message;
    field.input.classList.add('input-error');
  }

  function validateField(fieldKey) {
    var field = fields[fieldKey];
    var value = field.input.value.trim();

    clearError(fieldKey);

    if (field.required && value.length === 0) {
      setError(fieldKey, field.label + ' is required.');
      return false;
    }

    if (field.isEmail && value.length > 0 && !EMAIL_REGEX.test(value)) {
      setError(fieldKey, 'Please enter a valid email address.');
      return false;
    }

    return true;
  }

  function validateForm() {
    var isValid = true;
    Object.keys(fields).forEach(function (fieldKey) {
      if (!validateField(fieldKey)) {
        isValid = false;
      }
    });
    return isValid;
  }

  Object.keys(fields).forEach(function (fieldKey) {
    fields[fieldKey].input.addEventListener('blur', function () {
      validateField(fieldKey);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Demo submission: no backend call, simply show success confirmation.
    form.hidden = true;
    successBox.hidden = false;
  });

  sendAnotherBtn.addEventListener('click', function () {
    form.reset();
    Object.keys(fields).forEach(function (fieldKey) {
      clearError(fieldKey);
    });
    successBox.hidden = true;
    form.hidden = false;
    fields.name.input.focus();
  });
});
