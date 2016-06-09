/**
 * Created by leon on 6/9/16.
 */
module.exports = function () {
    var mongoose = require("mongoose");

    var WidgetSchema = mongoose.Schema({
        _page: {type:mongoose.Schema.ObjectId, ref: "Page"},
        size: String,
        text: String,
        width: String,
        url: String,
        position: Number,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'webappmaker.widget'});

    return WidgetSchema;

};
