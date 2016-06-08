/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app) {
    
    var models = require("./models/models.server")();
    require("./services/user.service.server")(app, models);
    require("./services/website.service.server")(app);
    require("./services/page.service.server")(app);
    require("./services/widget.service.server")(app);
    
};