/**
 * Created by leon on 6/9/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);

    function WidgetChooserController($location, $routeParams, WidgetService) {
        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.createWidget = createWidget;
        
        function createWidget(type) {
            WidgetService.createWidget(vm.pageId, {type: type}).then(
                function (response) {
                    $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + response.data._id);
                }
            )
        }

    }
    
})();


