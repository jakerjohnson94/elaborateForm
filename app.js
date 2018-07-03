const express = require('express');
const path = require('path');

const app = express();
const publicFolderPath = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicFolderPath));

const users = [];

app.post('/api/user', (req, res) => {
  console.log(req.body.username);
  const foundUser = users.find(user => user.username === req.body.username);
  if (!foundUser) {
    res.status(201);
    req.body.id = Math.floor(Math.random() * 100000);
    users.push(req.body);
    res.send(users);
  } else {
    res.status(409);
    res.send({ message: 'duplicate usernames' });
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
