const userForm = document.getElementById('userForm');
const userSubmitButton = userForm.querySelector("button[type='submit']");
const userEmail = userForm.querySelector('#email');
const userUsername = userForm.querySelector('#username');
const userPassword = userForm.querySelector('#password');
const userFirstName = userForm.querySelector('#firstName');
const userLastName = userForm.querySelector('#lastName');
const userHomepage = userForm.querySelector('#homepage');
const userTel = userForm.querySelector('#tel');
const userCommunicationMethod = userForm.querySelector('.com');
let userDevices = userForm.querySelectorAll('.device');
let userType = userForm.querySelectorAll('.option');
const userExperience = userForm.querySelector('#slider');

let user;

function getCheckboxes(array) {
  const checkboxArray = [];
  array = [...array];
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
    userEmail.value,
    userUsername.value,
    userPassword.value,
    userFirstName.value,
    userLastName.value,
    userHomepage.value,
    userTel.value,
    userCommunicationMethod.value,
    getCheckboxes(userDevices),
    getCheckboxes(userType),
    userExperience.value
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

userSubmitButton.addEventListener('click', clickEvent);
