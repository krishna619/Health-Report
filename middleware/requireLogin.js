const jwt = require('jsonwebtoken');
require('dotenv').config()
const requireLogin = (req, res, next) => {
const authHeader = req.headers.authorization;


if (!authHeader) {
    return res.redirect('/login');
}
token = authHeader.split(" ")[1];

console.log(token);
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
        console.log("error");
    return res.redirect('/login');
    }


    req.user = decoded.user;
    

    next();
});
};
module.exports = requireLogin;