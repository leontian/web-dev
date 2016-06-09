/**
 * Created by leon on 6/8/16.
 */

module.exports = function () {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/webappmaker');
    
    var models = {
        userModel: require('./user/user.model.server.js')(),
        websiteModel: require('./website/website.model.server')()
    };
    return models;
};
