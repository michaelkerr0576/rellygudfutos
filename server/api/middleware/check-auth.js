const jwt = require("jsonwebtoken");

// protect routes by verifying user token
// TODO fix bug where authenticated user can delete other user data
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //split string bearer and remove
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
