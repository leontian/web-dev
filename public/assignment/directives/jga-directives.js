/**
 * Created by leon on 6/8/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .directive("jgaSortable", jgaSortable);
    
    function jgaSortable($http) {
        var start = null;
        var end = null;
        
        function link(scope, element, attributes) {
            var jgaAxis = attributes.jgaAxis;
            $(element).sortable({
                axis: jgaAxis,
                start: function (event, ui) {
                    start = ui.item.index();
                },
                stop: function (event, ui) {
                    end = ui.item.index();
                    if (start != end) {
                        var temp = scope.model.widgets[start];
                        scope.model.widgets.splice(start, 1);
                        scope.model.widgets.splice(end, 0, temp);
                        scope.$apply();
                        var pageId = scope.model.pageId;
                        $http.put("/api/page/" + pageId + "/widget?initial=" + start + "&final=" + end);
                    }
                }
            });
        }
        
        return {
            link: link
        };
    }
    
})();
