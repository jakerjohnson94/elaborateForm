const userCreateForm = document.getElementById('user-create-form');
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']");
const userCreateEmail = userCreateForm.querySelector('#email');
const userCreateUsername = userCreateForm.querySelector('#username');
const userCreatePassword = userCreateForm.querySelector('#password');
const userCreateName = userCreateForm.querySelector('#name');
let user;

function User(email, username, password, name) {
  this.email = email;
  this.username = username;
  this.password = password;
  this.name = name;
}

const clickEvent = function(event) {
  event.preventDefault();

  user = new User(
    userCreateEmail.value,
    userCreateUsername.value,
    userCreatePassword.value,
    userCreateName.value
  );
  console.log(user);

  fetch('http://localhost:3000/api/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('Success:', data[0]);
    })
    .catch(error => console.error('Error:', error));
};

userCreateSubmitButton.addEventListener('click', clickEvent);
