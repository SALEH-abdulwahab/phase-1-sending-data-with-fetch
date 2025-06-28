// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name: name, email: email })
  })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
      const p = document.createElement("p");
      p.textContent = newId;
      document.body.appendChild(p);
    })
    .catch(error => {
      const errorMsg = document.createElement("p");
      errorMsg.textContent = error.message;
      document.body.appendChild(errorMsg);
    });
}
