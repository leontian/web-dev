/**
 * Created by leon on 6/8/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);
    var api = {
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserById: findUserById,
        findUserByName: findUserByName,
        findUserByCredentials: findUserByCredentials,
        findAllUsers: findAllUsers
    };
    
    return api;
    
    function createUser(user) {
        return User.create(user);
    }
    
    function findAllUsers() {
        return User.find();
    }
    
    function updateUser(user) {
        var userId = user._id;
        delete user._id;
        return User.update({_id: userId}, user);
        
    }
    
    function deleteUser(userId) {
        return User.findByIdAndRemove(userId);
        
    }
    
    function findUserById(userId) {
        return User.findById(userId);
    }
    
    function findUserByName(username) {
        return User.findOne({username: username});
        
    }
    
    function findUserByCredentials(username, password) {
        return User.findOne({username: username, password: password});
    }
    
};