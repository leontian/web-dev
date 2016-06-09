/**
 * Created by leon on 6/8/16.
 */

module.exports = function () {
    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: {type:mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'webappmaker.website'});
    
    return WebsiteSchema;

};
