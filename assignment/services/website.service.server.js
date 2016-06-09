/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app, models) {
    var websiteModel = models.websiteModel;
    
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);
    
    // var websites = [
    //     { "_id": "123", "name": "Facebook",    "developerId": "456" },
    //     { "_id": "234", "name": "Tweeter",     "developerId": "456" },
    //     { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
    //     { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
    //     { "_id": "678", "name": "Checkers",    "developerId": "123" },
    //     { "_id": "789", "name": "Chess",       "developerId": "234" }
    // ];

    function createWebsite(req, res) {
        var website = req.body;
        websiteModel.createWebsite(website).then(
            function (website) {
                res.json(website);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;
        websiteModel.findWebsitesForUser(userId).then(
            function (websites) {
                res.json(websites);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;
        websiteModel.findWebsiteById(websiteId).then(
            function (website) {
                res.json(website);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
    function updateWebsite(req, res) {
        var website = req.body;
        websiteModel.updateWebsite(website).then(
            function (website) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        websiteModel.deleteWebsite(websiteId).then(
            function (website) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }
    
};