/**
 * Created by leon on 5/31/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    
    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    function WidgetService() {
        var api = {
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            createWidget: createWidget,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        
        return api;
        
        function findWidgetsByPageId(pid) {
            var result = [];
            for (var i in widgets) {
                if (widgets[i].pageId === pid) {
                    result.push(widgets[i]);
                }
            }
            return result;
        }
        
        function findWidgetById(wid) {
            for (var i in widgets) {
                if (widgets[i]._id === wid) {
                    return widgets[i];
                }
            }
            return null;
        }
        
        function createWidget(pid, widget) {
            widget.pageId = pid;
            widgets.push(widget);
        }
        
        function updateWidget(wgid, widget) {
            for (var i in widgets) {
                if (widgets[i]._id === wgid) {
                    widgets[i] = widget;
                    return true;
                }
            }
            return false;
        }
        
        function deleteWidget(wgid) {
            for (var i in widgets) {
                if (widgets[i]._id === wgid) {
                    widgets.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }
})();
