const express = require('express');
const path = require('path');

const app = express();
const publicFolderPath = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicFolderPath));

const users = [];

// app.get('./api/user', (req, res) => {
//   res.status(200);

//   res.send(users);
// });

app.post('/api/user', (req, res) => {
  const isDuplicateUsername = false;
  const currentUsername = req.body.username;
  console.log();
  users.forEach(user => {
    if (user.username === req.body.username) isDuplicateUsername = true;
  });
  if (isDuplicateUsername === false) {
    res.status(201);
    req.body.id = Math.floor(Math.random() * 100000);
    users.push(req.body);
    res.send(users);
  } else {
    res.status(409);
    throw new Error('username already taken');
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
