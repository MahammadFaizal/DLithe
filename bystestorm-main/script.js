function adminLogin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;
  if (username === "supriya" && password === "123") {
    window.location.href = "register.html";
  } else {
    alert("Invalid credentials");
  }
}

function registerAccount() {
  alert("Account Registered Successfully!");
  window.location.href = "dashboard.html";
}

function navigate(page) {
  window.location.href = page;
}
