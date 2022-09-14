const fetchProfile = (username) => {
  let url = '/api/v1/profiles/username/' + username
  fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
}

const mostrarData = (data) => {
  document.getElementById('fullname').innerHTML = data.fullname
  document.getElementById('age').innerHTML = 'Age: ' + data.age
  document.getElementById('description').innerHTML = 'Description: ' + data.description
  document.getElementById('username').innerHTML = 'Username: ' + data.username
  document.getElementById('countpost').innerHTML = 'Cantidad Posts: ' + data.Post.length
  document.getElementById("test").innerHTML = getProfileIMG(data.img)
  document.getElementById('data').innerHTML = setdivswithPosts(data.Post)
}

const setdivswithPosts = (data) => {
  let body = ''
  if (data.length > 0) {
    const nuevoarr = data.map(array => `<tr><td>${array.id}</td><td>${array.title}</td><td>${array.content}</td></tr>`).join("")
    body += nuevoarr
  } else {
    const string = 'Post'
    const string2 = 'Something'
    const string3 = 'Please'
    body += `<tr><td>${string}</td><td>${string2}</td><td>${string3}</td></tr>`
  }
  return body
}

const getProfileIMG = (img) => {
  const imgroute = '<img src="' + img + '" alt="Test" class="rounded-circle" width="80"/>';
  return imgroute
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

