async function createPost(username) {
  let title = document.getElementById("title").value
  let content = document.getElementById("content").value
  let formData = {
    title: title,
    content: content,
    username: username,
    author: username
  }
  let formDataJSON = JSON.stringify(formData)
  await fetch('/api/v1/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJSON,
  })
}

async function deletePost() {
  let id = document.getElementById("id").value
  console.log('hola')
  await fetch('/api/v1/posts/' + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

function openForm(form) {
  document.getElementById(form).style.display = "block";
}

function closeForm(form) {
  document.getElementById(form).style.display = "none";
}
