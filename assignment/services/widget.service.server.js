/**
 * Created by leon on 6/2/16.
 */
module.exports = function (app) {

    var widgetModel = models.widgetModel;
    
    // var widgets = [
    //     { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
    //     { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
    //         "url": "http://lorempixel.com/400/200/"},
    //     { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    //     { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    //     { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
    //         "url": "https://youtu.be/AM2Ivdi9c4E" },
    //     { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    // ];

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.put("/api/page/:pageId/widget", rearrangeWidgets);
    // TODO: make sure widgetId unique in db
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    
    function rearrangeWidgets(req, res) {
        // TODO: not exactly correct, need to get pageId involved
        var start = req.query.initial;
        var end = req.query.final;
        var temp = widgets[start];
        widgets.splice(start, 1);
        widgets.splice(end, 0, temp);
        res.sendStatus(200);
    }

    function createWidget(req, res) {
        var widget = req.body;
        widgetModel.createWidget(widget).then(
            function (widget) {
                res.json(widget);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        widgetModel.findWidgetsForPage(pageId).then(
            function (widgets) {
                res.json(widgets);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        widgetModel.findWidgetById(widgetId).then(
            function (widget) {
                res.json(widget);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }

    function updateWidget(req, res) {
        var widget = req.body;
        widgetModel.updateWidget(widget).then(
            function (widget) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        widgetModel.deleteWidget(widgetId).then(
            function (widget) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }



};
