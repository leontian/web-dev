/**
 * Created by leon on 6/8/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);
    var api = {
        createUser: createUser
    };
    
    function createUser(user) {
        User.create(user);
    }
    return api;
};