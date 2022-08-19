const mostrarData = (data) => {
  document.getElementById('fullname').innerHTML = data.fullname
  document.getElementById('age').innerHTML = 'Age: ' + data.age
  document.getElementById('description').innerHTML = 'Description: ' + data.description
  document.getElementById('username').innerHTML = 'Username: ' + data.username
  document.getElementById('countpost').innerHTML = 'Cantidad Posts: ' + data.Post.length

  let body = ''
  if (data.Post.length > 0) {
    for (let i = 0; i < data.Post.length; i++) {
      body += `<tr><td>${data.Post[i].title}</td><td>${data.Post[i].content}</td></tr>`
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