/**
 * Created by leon on 5/31/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    

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
