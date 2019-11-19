const Item = require('./index.js');

let get = (req, res) => {
  Item.find({}).sort([['date', '-1']]).exec((err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
}

let save = (req, res) => {
  Item.create(req, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

let remove = (req, res) => {
  Item.deleteOne(req, (err, doc) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
}

module.exports = {
  get: get,
  save: save,
  remove: remove
};