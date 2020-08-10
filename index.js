const express = require('express');
const app = express();

const fs = require('fs');

const users = [];

fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
  if (err) throw err;
  JSON.parse(data).forEach((user) => {
    user.name.full = `${user.name.first} ${user.name.last}`;
    users.push(user);
  });
});

app.get('/', (req, res) => {
  res.send('Express Starter');
});

app.get('/users', (req, res) => {
  res.render('index', {users: users});
});

const server = app.listen(3000, () => {
  console.log(`Sever running at ${server.address().port}`);
});
