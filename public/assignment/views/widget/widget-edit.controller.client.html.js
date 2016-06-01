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
            vm.widget = WidgetService.findWidgetById(vm.wgid);
        }
        init();

        function updateWidget() {
            WidgetService.updateWidget(vm.wgid, vm.widget);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
        }
        
        function deleteWidget() {
            WidgetService.deleteWidget(vm.wgid);
            $location.url("/user/" + vm.uid + "/website/" + vm.wid + "/page/" + vm.pid + "/widget");
        }
    }
    
})();