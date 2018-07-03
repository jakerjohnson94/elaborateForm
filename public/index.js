const userCreateForm = document.getElementById('userForm');
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']");
const userCreateEmail = userCreateForm.querySelector('#email');
const userCreateUsername = userCreateForm.querySelector('#username');
const userCreatePassword = userCreateForm.querySelector('#password');
const userCreateFirstName = userCreateForm.querySelector('#firstName');
const userCreateLastName = userCreateForm.querySelector('#lastName');
const userCreateHomepage = userCreateForm.querySelector('#homepage');
const userCreateTel = userCreateForm.querySelector('#tel');
const userCreateCommunicationMethod = userCreateForm.querySelector('.com');
let userCreateDevices = userCreateForm.querySelectorAll('.device');
let userCreateUserType = userCreateForm.querySelectorAll('.option');
const userCreateExperience = userCreateForm.querySelector('#yearSlider');

let user;
function getCheckboxes(array) {
  array = [...array];
  const checkboxArray = [];

  array.forEach(element => {
    if (element.checked === true || element.selected === true) checkboxArray.push(element.value);
  });
  return checkboxArray;
}
function User(
  email,
  username,
  password,
  firstName,
  lastName,
  homepage,
  telephone,
  communicationMethod,
  devices,
  userTypes,
  yearsOfExperience
) {
  this.email = email;
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.homepage = homepage;
  this.telephone = telephone;
  this.communicationMethod = communicationMethod;
  this.devices = devices;
  this.userTypes = userTypes;
  this.yearsOfExperience = yearsOfExperience;
}

const clickEvent = function(event) {
  event.preventDefault();

  user = new User(
    userCreateEmail.value,
    userCreateUsername.value,
    userCreatePassword.value,
    userCreateFirstName.value,
    userCreateLastName.value,
    userCreateHomepage.value,
    userCreateTel.value,
    userCreateCommunicationMethod.value,
    getCheckboxes(userCreateDevices),
    getCheckboxes(userCreateUserType),
    userCreateExperience.value
  );
  console.log(user);

  fetch('http://localhost:3000/api/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(async function(response) {
      if (response.ok) {
        return response.json();
      } else throw await response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => console.error('Error:', error.message));
};

userCreateSubmitButton.addEventListener('click', clickEvent);
