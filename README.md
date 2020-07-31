# rellygudfutos

> MEVN Full Stack Application - Photo Gallery to display my photos

> **DEMO:** [https://www.rellygudfutos.com](https://www.rellygudfutos.com)

## Objective

To build a full stack website where I could showcase my photography.

## Overview

A user will be presented with a homepage where they can view the photo grid. Like Instagram, the photos can be clicked to view in list format. This will display more information on the photo such as "camera", "lens", "title", "store link" etc. Unlike Instagram, the grid will display the photos in [Packery Format](https://packery.metafizzy.co/) allowing landscape photos to take up more room. A regular user can filter, sort and search for photos in the grid while an admin user can login and run CRUD operations to POST, PATCH AND DELETE photos and tags.

## Motivation

**PRACTICAL:** I would use it regularly to post photos I have taken and use it to link my social media and store on [Picfair](https://michaelkerr.picfair.com/).

**DESIGN:** Design challenge - The photography needed to be the main focus. The UI was built to be clear, consise and intuitive. Each feature takes up as little room as possible to allow the attention to be on the photography.

**LEARNING:** To build an app using the MEVN Stack (MongoDB, Express, Vue & Node) from the ground up.

## Tech Stack

Rellygudfutos is created with:

- Vue
- Node
- Express
- Mongoose
- MongoDB
- AWS S3

## Features

TODO - Features / Code Examples / Include logo/demo screenshot etc.

#### 1. Login 
![Login Screen](https://user-images.githubusercontent.com/53580213/89068681-a74ba200-d369-11ea-9bc6-937e03a567e8.JPG)

##### 1.1 Frontend

Some basic form validation before executing the login action in the store.

```javascript
methods: {
    login(event) {
      event.preventDefault();
      if (
        this.loginForm.email.length > 2 &&
        this.loginForm.password.length > 2
      ) {
        const email = this.loginForm.email;
        const password = this.loginForm.password;
        this.$store
          .dispatch("login", { email, password })
          .then(success => {
            this.$router.push("/");
          })
          .catch(err => {
            // catch code here - see source code
      }
    }
  }
```

[Vuex](https://vuex.vuejs.org/) was used to handle the user state management. I wish I used it to also handle the photos and tags state too but alas I only used to handle user authentication. The user auth token is stored in LocalStorage and is retrieved everytime we want to check if the user is logged in.

```javascript
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
```

If the user is logged out the token will be removed

```javascript
 logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
```

##### 1.2 Backend

User schema:

```javascript
const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
});
```

If the user exists is a match for the MongoDB users collection it will return a token. That token will expire in 1 hour. If it expires the user will have to login in again. I used bcrypt to hash and salt the password before inserting into the database so it becomees very difficult to break.

```javascript
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
```

## License

MIT © [MichaelKerr]()
