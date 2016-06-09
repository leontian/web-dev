/**
 * Created by leon on 6/8/16.
 */

module.exports = function () {
    var mongoose = require('mongoose');
    var connection_string;
    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
        connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    } else {
        connection_string = 'mongodb://localhost/webappmaker';
    }
    mongoose.connect(connection_string);
    
    var models = {
        userModel: require('./user/user.model.server.js')(),
        websiteModel: require('./website/website.model.server')(),
        pageModel: require('./page/page.model.server')(),
        widgetModel: require('./widget/widget.model.server')()
    };
    return models;
};
