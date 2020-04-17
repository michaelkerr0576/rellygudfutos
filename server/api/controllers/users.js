const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Importing Model
const User = require("../models/User");

// exports.users_create = async (req, res, next) => {
//   await User.find({ email: req.body.email })
//     .exec()
//     .then(user => {
//       if (user.length >= 1) {
//         //0 creates new user, 1 already exists
//         return res.status(409).json({
//           message: "Email already exists"
//         });
//       } else {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           //10 adds string salting so hash cant be looked up in dictionary tables
//           if (err) {
//             return res.status(500).json({
//               error: err //could not safely store password
//             });
//           } else {
//             const user = new User({
//               _id: new mongoose.Types.ObjectId(),
//               email: req.body.email,
//               password: hash
//             });
//             user
//               .save()
//               .then(result => {
//                 console.log(result);
//                 res.status(201).json({
//                   message: "User Created"
//                 });
//               })
//               .catch(err => {
//                 console.log(err);
//                 res.status(500).json({ error: err });
//               });
//           }
//         });
//       }
//     });
// };

exports.users_login_user = async (req, res, next) => {
  await User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// exports.user_delete_user = async (req, res, next) => {
//   await User.remove({ _id: req.params.userId })
//     .exec()
//     .then(result => {
//       res.status(200).json({
//         message: "User deleted"
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// };
