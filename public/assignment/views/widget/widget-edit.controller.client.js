/**
 * Created by leon on 6/1/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);
    
    function WidgetEditController(WidgetService, $routeParams, $location) {
        var vm = this;
        vm.wgid = $routeParams['wgid'];
        vm.uid = $routeParams['uid'];
        vm.wid = $routeParams['wid'];
        vm.pid = $routeParams['pid'];
        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;
        
        function init() {
            WidgetService
                .findWidgetById(vm.wgid)
                .then(
                    function (response) {
                        vm.widget = response.data;
                    });
        }
        init();

        function updateWidget() {
            WidgetService
                .updateWidget(vm.wgid, vm.widget)
                .then(
                    function (response) {
                        vm.success = "Widget updated";
                        $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
                    });
        }
        
        function deleteWidget() {
            WidgetService
                .deleteWidget(vm.wgid)
                .then(
                    function (response) {
                        $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
                    });
        }
    }
    
})();