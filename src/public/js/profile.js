const mostrarData = (data) => {
  document.getElementById('fullname').innerHTML = data.fullname
  document.getElementById('age').innerHTML = 'Age: ' + data.age
  document.getElementById('description').innerHTML = 'Description: ' + data.description
  document.getElementById('username').innerHTML = 'Username: ' + data.username
  document.getElementById('countpost').innerHTML = 'Cantidad Posts: ' + data.Post.length
  let body = ''
  if (data.Post.length > 0) {
    for (let i = 0; i < data.Post.length; i++) {
      console.log(data.Post[i])
      body += `<tr><td>${data.Post[i].id}</td><td>${data.Post[i].title}</td><td>${data.Post[i].content}</td></tr>`
    }

  } else {
    const string = 'Post'
    const string2 = 'Something'
    body += `<tr><td>${string}</td><td>${string2}</td></tr>`
  }
  document.getElementById('data').innerHTML = body

  const html = '<img src="' + data.img + '" alt="Test" class="rounded-circle" width="80"/>';
  const div = document.getElementById("test");
  div.innerHTML = html;
}

const getUserbyToken = () => {

  const tokenParts = document.cookie.split('.');
  const encodedPayload = tokenParts[1];
  const rawPayload = atob(encodedPayload);
  const user = JSON.parse(rawPayload);
  return user.user.username
}

async function logout() {
  await fetch('/api/v1/users/auth/logout', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(function (response) {
    if (response.status === 200) {
      window.location.assign("/login")
    } else {
      alert('worng')
    };
  });
}

const fetchProfile = (username) => {
  let url = '/api/v1/profiles/username/' + username
  fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
}