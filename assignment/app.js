/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app) {
    
    require("./services/user.service.server")(app);
    
    app.get("/say/:something", function (req, res) {
        console.log("hello from new module" + req.params['something']);
        res.send("hello");
    });
};