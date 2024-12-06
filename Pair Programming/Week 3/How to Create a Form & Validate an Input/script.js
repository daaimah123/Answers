document.getElementById('registrationForm').addEventListener('submit', function(event) {
  // Prevent form submission if validation fails
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Simple validation example
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert('Invalid email address');
    return false;
  }

  if (password.length <  8) {
    alert('Password must be at least  8 characters long');
    return false;
  }

  // If validation passes, you could submit the form or proceed with other actions
  console.log('Form is valid');
});