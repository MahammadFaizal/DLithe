
function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName)) {
      document.getElementById('nameError').style.display = 'block';
      return false;
    } else {
      document.getElementById('nameError').style.display = 'none';
      return true;
    }
  }
  
  function validateDOB() {
    const dob = document.getElementById('dob').value;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20[0-2][0-5])$/;
    if (!dobRegex.test(dob)) {
      document.getElementById('dobError').style.display = 'block';
      return false;
    } else {
      document.getElementById('dobError').style.display = 'none';
      return true;
    }
  }
  
  function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').style.display = 'block';
      return false;
    } else {
      document.getElementById('emailError').style.display = 'none';
      return true;
    }
  }
  
  function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').style.display = 'block';
      return false;
    } else {
      document.getElementById('phoneError').style.display = 'none';
      return true;
    }
  }
  
  function validatePassword() {
    const password = document.getElementById('password').value;
    if (password.length < 8) {
      document.getElementById('passwordError').style.display = 'block';
      return false;
    } else {
      document.getElementById('passwordError').style.display = 'none';
      return true;
    }
  }
   
  function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').style.display = 'block';
      return false;
    } else {
      document.getElementById('confirmPasswordError').style.display = 'none';
      return true;
    }
  }
  
  document.getElementById('fullName').addEventListener('blur', validateFullName);
  document.getElementById('dob').addEventListener('blur', validateDOB);
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('phone').addEventListener('blur', validatePhone);
  document.getElementById('password').addEventListener('blur', validatePassword);
  document.getElementById('confirmPassword').addEventListener('blur', validateConfirmPassword);
  
  function validateForm() {
    const isFullNameValid = validateFullName();
    const isDOBValid = validateDOB();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
  
    if (isFullNameValid && isDOBValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Registration Successful');
      window.location.href ="./index.html";

      return true;
    } else {
      return false;
    }
  }
