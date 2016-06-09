/**
 * Created by leon on 6/8/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");

    var PageSchema = mongoose.Schema({
        _website: {type: mongoose.Schema.ObjectId, ref: "Website"},
        name: String,
        description: String,
        widgets: {type: [mongoose.Schema.ObjectId], ref: "Widget"},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'webappmaker.page'});

    return PageSchema;
};
