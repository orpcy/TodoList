const User = require("../models/userModel");

const apiCallback = (error, data, res) => {
  if (error) res.json({ err: "error occured", error });
  res.json(data);
};

module.exports.addUser = (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) {
      res.json({ error: "Email already exists!" });
    } else {
      res.json(data);
    }
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, data) => {
    if (err) throw err;
    if (data) {
      if (data.password !== password.toString()) {
        res.json({ error: "incorrect password, please try again!" });
      } else {
        res.json(data);
      }
    } else {
      res.json({ error: "user account does not exist!" });
    }
  });
};
