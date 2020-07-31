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

Some basic form validation before sending it off to the backend

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
            if (err.response) {
              // The request was made and the server responded with a status code
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
              this.errors.push(err.response.status);
              this.errors.push(err.response.data);
            } else if (err.request) {
              // The request was made but no response was received
              console.log(err.request);
              this.errors.push(err.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", err.message);
              this.errors.push("Error", err.message);
            }
            console.log(err.config);
          });
      }
    }
  }
```

##### 1.2 Backend

## License

MIT © [MichaelKerr]()
