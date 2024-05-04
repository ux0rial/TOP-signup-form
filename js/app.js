document.querySelector("form").addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    event.preventDefault();
    alert("Passwords do not match.");
  }
});
