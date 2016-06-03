/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app) {
    var pages = [
        {"_id": "321", "name": "Post 1", "websiteId": "456"},
        {"_id": "432", "name": "Post 2", "websiteId": "456"},
        {"_id": "543", "name": "Post 3", "websiteId": "456"}
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    // TODO: make sure pageId unique in db
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var page = req.body;
        page._id = (new Date()).getTime() + "";
        pages.push(page);
        res.send(200);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var result = [];
        for (var i in pages) {
            if (pages[i].websiteId === websiteId) {
                result.push(pages[i]);
            }
        }
        res.json(result);
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for (var i in pages) {
            if (pages[i]._id === pageId) {
                res.send(pages[i]);
                return;
            }
        }
        res.json({});

    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        for (var i in pages) {
            if (pages[i]._id === pageId) {
                pages[i] = page;
                res.send(200);
                return;
            }
        }
        res.send(400);

    }

    function deletePage(req, res) {
        var id = req.params.pageId;
        for (var i in pages) {
            if (pages[i]._id === id) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }



};

