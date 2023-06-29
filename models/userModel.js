const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
    type: String,
    required:[true,"Please enter a email"],
    unique: [true,"Email id already exists"]
},
password:{
    type: String,
    required:[true,"Please enter a password"],
},

},{
timestamps: true,
})

module.exports = mongoose.model("customer",userSchema);