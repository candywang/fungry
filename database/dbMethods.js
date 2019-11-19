const Item = require('./index.js');

let get = (req, res) => {
  Item.find({}, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
}

let save = (req, res) => {
  Item.create(req, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
};

module.exports = {
  get: get,
  save: save
};