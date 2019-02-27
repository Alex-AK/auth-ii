const db = require('../data/dbConfig');

module.exports = {
  get,
  getById,
  getBy,
  add
};

function get() {
  return db('user');
}

function getById(id) {
  return db('user')
    .where({ id })
    .first();
}

function getBy(username) {
  return db('user')
    .where(username)
    .first();
}

function add(user) {
  return db('user')
    .insert(user)
    .then(ids => getById(ids[0]));
}
