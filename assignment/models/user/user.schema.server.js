/**
 * Created by leon on 6/8/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");
    
    var UserSchema = mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        dob: Date,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'webappmaker.user'});
    
    return UserSchema;
};
