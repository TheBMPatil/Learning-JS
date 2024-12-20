function validateForm(event) {
    // Clear previous error messages
    let errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function(message) {
      message.remove();
    });
  
    // Validate name
    let name = document.getElementById('name').value;
    if (name === "") {
      showError('name', "Name is required.");
      event.preventDefault();
      return false;
    }
  
    // Validate email
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      showError('email', "Please enter a valid email address.");
      event.preventDefault();
      return false;
    }
  
    // Validate password
    let password = document.getElementById('password').value;
    if (password.length < 6) {
      showError('password', "Password must be at least 6 characters long.");
      event.preventDefault();
      return false;
    }
  
    // Validate at least one subject checkbox is checked
    let subjectChecked = false;
    let subjects = document.getElementsByName('subject');
    for (let i = 0; i < subjects.length; i++) {
      if (subjects[i].checked) {
        subjectChecked = true;
        break;
      }
    }
    if (!subjectChecked) {
      showError('subjects', "Please select at least one subject.");
      event.preventDefault();
      return false;
    }
  
    // Validate gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      showError('gender', "Please select a gender.");
      event.preventDefault();
      return false;
    }
  
    return true;
  }
  
  function showError(field, message) {
    let fieldElement = document.getElementById(field);
    let errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.style.color = 'red';
    errorMessage.innerText = message;
    fieldElement.insertAdjacentElement('afterend', errorMessage);
  }
  