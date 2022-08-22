const sampleForm = document.getElementById("loginUser");
sampleForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let username = document.getElementById("login").value
  let password = document.getElementById("password").value

  let formData = {
    username: username,
    password: password,
  }

  let formDataJSON = JSON.stringify(formData)
  fetch('/api/v1/users/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJSON,
  })
    .then(function (response) {
      if (response.status === 200) {
        window.location.assign("/profile")
      } else {
        alert('wrong password or username')
      }
    })
})


