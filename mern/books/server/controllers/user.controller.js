const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const {clave} = require('../config/jwt.config');
const bcrypt = require('bcrypt');

module.exports.registrar = (req, res) => {
    const user = req.body;
    User.create(user)
        .then(data => res.json({ data: null, message: null, error: false}))
        .catch(error => res.json({ data: null, message: error, error: true}));
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
            res.json({ msg: "Usuario o clave inválido", error: false });
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid) {
                        const datos = {
                            _id: user._id,
                            name: user.firstName + ' ' + user.lastName,
                            email: user.email
                        };
                        const newJWT = jwt.sign(datos, clave);
                        res.cookie("usertoken", newJWT, clave, {
                            httpOnly: true
                        }).json({ data: datos, msg: "success!", error: false });
                    } else {
                        res.json({ msg: "Usuario o clave inválido", error: false });
                    }
                })
        }
      }).catch(err => res.json(err));
  };