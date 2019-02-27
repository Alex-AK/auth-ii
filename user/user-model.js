const db = require('../data/dbConfig');

module.exports = {
  get,
  getById,
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

function add(user) {
  return db('user')
    .insert(user)
    .then(ids => getById(ids[0]));
}
