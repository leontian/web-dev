/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app, models) {
    
    var pageModel = models.pageModel;
    // var pages = [
    //     {"_id": "321", "name": "Post 1", "websiteId": "456"},
    //     {"_id": "432", "name": "Post 2", "websiteId": "456"},
    //     {"_id": "543", "name": "Post 3", "websiteId": "456"}
    // ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var page = req.body;
        var websiteId = req.params.websiteId;
        page._website = websiteId;

        pageModel.createPage(page).then(
            function (page) {
                res.json(page);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        pageModel.findPagesForWebsite(websiteId).then(
            function (pages) {
                res.json(pages);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        pageModel.findPageById(pageId).then(
            function (page) {
                res.json(page);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function updatePage(req, res) {
        // var pageId = req.params.pageId;
        var page = req.body;

        pageModel.updatePage(page).then(
            function (page) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        
        pageModel.deletePage(pageId).then(
            function (page) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        )
    }



};

