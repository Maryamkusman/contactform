document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;

  const name = document.getElementById('name').value;
  if (!name) {
    document.getElementById('nameError').textContent = 'Name is required';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  const email = document.getElementById('email').value;
  if (!email || !email.includes('@')) {
    document.getElementById('emailError').textContent = 'Valid emal required';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  const comments = document.getElementById('comments').value;
  if (!comments) {
    document.getElementById('commentsError').textContent = 'Coments are req';
    valid = false;
  } else {
    document.getElementById('commentsError').textContent = '';
  }

  // If form valid subit
  if (valid) {
    document.getElementById('infoMessage').textContent = 'Form submitted successfully!';
    setTimeout(function() {
      document.getElementById('infoMessage').textContent = '';
    }, 3000);

  }
});
const formErrors = [];

function validateAndSubmit() {
 
  if (!valid) {
    const errorData = {
      name,
      email,
      comments,
    };
    formErrors.push(errorData);
    document.getElementById('formErrors').value = JSON.stringify(formErrors);
  }
}

document.getElementById('comments').addEventListener('input', function(event) {
  const regex = /^[a-zA-Z0-9.,!? ]*$/; 
  const input = event.target.value;
  const maskedInput = input.replace(new RegExp(`[^${regex.source}]`, 'g'), '');

  if (input !== maskedInput) {
    event.target.value = maskedInput;
    showError('Illegal character entered.');
  }
});

document.getElementById('comments').addEventListener('input', function(event) {
  const maxLength = event.target.maxLength;
  const remainingCharacters = maxLength - event.target.value.length;

  if (remainingCharacters < 10) {
    document.getElementById('infoMessage').textContent = `Warning: ${remainingCharacters} characters remaining.`;
    document.getElementById('infoMessage').style.color = 'orange';
  }

  if (remainingCharacters < 0) {
    document.getElementById('infoMessage').textContent = 'Error: Character limit exceeded.';
    document.getElementById('infoMessage').style.color = 'red';
  }
});

