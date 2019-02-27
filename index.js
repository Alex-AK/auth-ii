require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = require('./user/user-model');
const secret = process.env.SECRET;

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // additional information here
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
}

server.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 5);

  newUser.password = hash;

  if ((!username, !password)) {
    res.status(400).json({ message: 'Username and password required.' });
  }

  users
    .add(newUser)
    .then(user => {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: 'Registration successful', userId: user.id, token });
    })
    .catch(err => res.status(500).json(err));
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    // no username or password
    res.status(400).json({ message: 'Username and password required.' });
  }

  users
    .getBy({ username })
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ message: 'Login successful', userId: user.id, token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/users', auth, (req, res) => {
  users
    .get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
});

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Access denied.' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'You are not verified' });
  }
}

const port = 4000;
server.listen(port, () => {
  console.log('*** server running on 4000. ***');
});
