const sampleForm = document.getElementById("registerUser");
  sampleForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let username = document.getElementById("registerName").value
    let password = document.getElementById("registerPass").value
    let fullname = document.getElementById("fullname").value
    let description = document.getElementById("description").value
    let age = document.getElementById("age").value
    let img = document.getElementById("img").value
    let formData = {
      username: username,
      password: password,
    }

    let profileData = {
      fullname: fullname,
      description: description,
      age: Number.parseInt(age),
      username: username,
      img:img
    }
    let formDataJSON = JSON.stringify(formData)
    let profileDataJSON = JSON.stringify(profileData)
    await fetch('/api/v1/users/auth/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: formDataJSON,
    })
    await fetch('/api/v1/profiles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: profileDataJSON,
    }).then(function (response) {
        if (response.status === 201) {
          window.location.assign("/login") 
        } else {
          alert('wrong')
        };
      });
  });